import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import hippoModelUrl from "../assets/hippo.vox.glb";

const VoxelHippo = () => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const refRenderer = useRef();

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer;
    const { current: container } = refContainer;
    if (container && renderer) {
      renderer.setSize(container.clientWidth, container.clientHeight);
    }
  }, []);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer;
    if (!container) return;

    // These live outside initScene so cleanup can always reach them.
    let req = null;
    let rendererInstance = null;

    const initScene = () => {
      const scW = container.clientWidth;
      const scH = container.clientHeight;
      // On mobile private/incognito the container can report 0×0 on the first
      // paint. Bail out and let the ResizeObserver retry once dimensions exist.
      if (scW === 0 || scH === 0) return false;

      // ── Renderer ────────────────────────────────────────────────────────────
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.NoToneMapping;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);
      refRenderer.current = renderer;
      rendererInstance = renderer;

      const scene = new THREE.Scene();

      // ── Camera ──────────────────────────────────────────────────────────────
      const target = new THREE.Vector3(-0.5, 1.2, 0);

      const scale = scH * 0.005 + 4.8;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000,
      );
      camera.position.set(
        -30 * Math.sin(0.2 * Math.PI),
        10,
        30 * Math.cos(0.2 * Math.PI),
      );
      camera.lookAt(target);

      // ── Lighting ────────────────────────────────────────────────────────────
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
      keyLight.position.set(-4, 18, 10);
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.set(1024, 1024);
      keyLight.shadow.camera.near = 1;
      keyLight.shadow.camera.far = 180;
      keyLight.shadow.camera.left = -12;
      keyLight.shadow.camera.right = 12;
      keyLight.shadow.camera.top = 18;
      keyLight.shadow.camera.bottom = -8;
      keyLight.shadow.radius = 20;
      keyLight.shadow.bias = -0.0005;
      keyLight.shadow.normalBias = 0.05;
      scene.add(keyLight);

      const rimLight = new THREE.DirectionalLight(0xaaccff, 0.5);
      rimLight.position.set(6, 6, -10);
      scene.add(rimLight);

      // ── Shadow-receiving ground plane ────────────────────────────────────────
      const shadowPlane = new THREE.Mesh(
        new THREE.PlaneGeometry(40, 40),
        new THREE.ShadowMaterial({
          color: 0x000000,
          opacity: 0.2,
          transparent: true,
        }),
      );
      shadowPlane.rotation.x = -Math.PI / 2;
      shadowPlane.receiveShadow = true;
      scene.add(shadowPlane);

      // ── Controls ─────────────────────────────────────────────────────────────
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.autoRotateSpeed = 2;
      controls.target = target;
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;

      // ── Render loop ──────────────────────────────────────────────────────────
      const animate = () => {
        req = requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };

      // ── Load model ───────────────────────────────────────────────────────────
      const loader = new GLTFLoader();
      loader.load(
        hippoModelUrl,
        (gltf) => {
          const obj = gltf.scene;
          obj.name = "model";
          obj.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });
          scene.add(obj);

          const box = new THREE.Box3().setFromObject(obj);
          const center = box.getCenter(new THREE.Vector3());
          const bsphere = box.getBoundingSphere(new THREE.Sphere());
          const fitScale = bsphere.radius;
          camera.left = -fitScale;
          camera.right = fitScale;
          camera.top = fitScale;
          camera.bottom = -fitScale;
          camera.updateProjectionMatrix();

          controls.target.copy(center);
          shadowPlane.position.y = box.min.y - 0.02;

          animate();
          setLoading(false);
        },
        undefined,
        () => setLoading(false),
      );

      return true;
    };

    const didInit = initScene();

    if (!didInit) {
      // Container had no dimensions yet (common on mobile private mode).
      // Wait for the first non-zero resize event, then initialise.
      const ro = new ResizeObserver(() => {
        if (initScene()) {
          ro.disconnect();
        }
      });
      ro.observe(container);
      return () => {
        ro.disconnect();
        if (rendererInstance) {
          cancelAnimationFrame(req);
          rendererInstance.domElement.remove();
          rendererInstance.dispose();
        }
      };
    }

    return () => {
      cancelAnimationFrame(req);
      rendererInstance.domElement.remove();
      rendererInstance.dispose();
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () =>
      window.removeEventListener("resize", handleWindowResize, false);
  }, [handleWindowResize]);

  return (
    <div className="voxel-model-canvas" ref={refContainer}>
      {loading && (
        <div className="model-loading model-loading-visible" aria-hidden="true">
          <span className="model-loading-spinner" />
        </div>
      )}
    </div>
  );
};

export default VoxelHippo;
