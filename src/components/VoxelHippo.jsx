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

    const scW = container.clientWidth;
    const scH = container.clientHeight;

    // ── Renderer ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(scW, scH);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NoToneMapping;
    // Enable soft shadow maps for realistic angled shadows
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.VSMShadowMap;
    container.appendChild(renderer.domElement);
    refRenderer.current = renderer;

    const scene = new THREE.Scene();

    // ── Camera ────────────────────────────────────────────────────────────────
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

    // ── Lighting ──────────────────────────────────────────────────────────────
    // Soft ambient fill — keeps shadow areas from going pitch black
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    // Key light: upper-front-left → casts a visible angled (diagonal) shadow
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
    keyLight.shadow.radius = 20; // soft shadow edge blur
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    // Rim / back fill: cooler tint from the opposite side, no shadow
    const rimLight = new THREE.DirectionalLight(0xaaccff, 0.5);
    rimLight.position.set(6, 6, -10);
    scene.add(rimLight);

    // ── Shadow-receiving ground plane ─────────────────────────────────────────
    // ShadowMaterial is fully transparent except where shadows land,
    // so it blends perfectly against any page background.
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
    // y-position is adjusted once the model loads (see below)
    scene.add(shadowPlane);

    // ── Controls ──────────────────────────────────────────────────────────────
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;
    controls.target = target;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;

    // ── Load model ────────────────────────────────────────────────────────────
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

        // Fit orthographic camera to the model's bounding sphere.
        // Dividing by 0.80 leaves ~20% breathing room on all sides
        // (matches model-viewer's camera-orbit="0deg 75deg 95%" feel).
        const box = new THREE.Box3().setFromObject(obj);
        const center = box.getCenter(new THREE.Vector3());
        const bsphere = box.getBoundingSphere(new THREE.Sphere());
        const fitScale = bsphere.radius;
        camera.left = -fitScale;
        camera.right = fitScale;
        camera.top = fitScale;
        camera.bottom = -fitScale;
        camera.updateProjectionMatrix();

        // Re-aim controls at the true model centre
        controls.target.copy(center);

        // Align shadow plane to the bottom of the loaded model
        shadowPlane.position.y = box.min.y - 0.02;

        animate();
        setLoading(false);
      },
      undefined,
      () => setLoading(false),
    );

    // ── Render loop ───────────────────────────────────────────────────────────
    let req = null;
    const animate = () => {
      req = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    return () => {
      cancelAnimationFrame(req);
      renderer.domElement.remove();
      renderer.dispose();
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
