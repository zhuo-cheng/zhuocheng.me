import { Fragment, useEffect, useRef, useState } from "react";
import "@google/model-viewer";
import homepageModel from "../assets/hippo.vox.glb";
import "../styles/introduction.css";

const ACTIVITIES = [
  {
    emoji: "☕️",
    text: "brew pour-over coffee",
    animationAttr: "coffee",
  },
  {
    emoji: "🐈",
    text: "play with my cat",
    animationAttr: "cat",
  },
  {
    emoji: "🎧",
    text: "listen to rap",
    animationAttr: "headphone",
  },
  {
    emoji: "✈️",
    text: "enjoy traveling",
    animationAttr: "plane",
  },
];

const HIGH_FIVE_RESET_MS = 0;
const MIN_MODEL_LOADING_MS = 300;

const Introduction = () => {
  const [noHighFive, setNoHighFive] = useState(false);
  const [isModelLoading, setIsModelLoading] = useState(true);
  const highFiveTimerRef = useRef(null);
  const modelViewerRef = useRef(null);
  const modelLoadingStartRef = useRef(0);
  const revealTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (highFiveTimerRef.current) {
        clearTimeout(highFiveTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    modelLoadingStartRef.current = Date.now();

    const modelViewer = modelViewerRef.current;
    if (!modelViewer) {
      return;
    }

    const stopLoading = () => {
      const elapsed = Date.now() - modelLoadingStartRef.current;
      const remaining = Math.max(0, MIN_MODEL_LOADING_MS - elapsed);

      if (revealTimerRef.current) {
        window.clearTimeout(revealTimerRef.current);
      }

      revealTimerRef.current = window.setTimeout(() => {
        setIsModelLoading(false);
      }, remaining);
    };

    const fallbackTimer = window.setTimeout(stopLoading, 3000);

    modelViewer.addEventListener("load", stopLoading);
    modelViewer.addEventListener("error", stopLoading);

    return () => {
      window.clearTimeout(fallbackTimer);
      if (revealTimerRef.current) {
        window.clearTimeout(revealTimerRef.current);
      }
      modelViewer.removeEventListener("load", stopLoading);
      modelViewer.removeEventListener("error", stopLoading);
    };
  }, []);

  const refreshHighFive = () => {
    setNoHighFive(true);
    if (highFiveTimerRef.current) {
      clearTimeout(highFiveTimerRef.current);
    }
    highFiveTimerRef.current = setTimeout(() => {
      setNoHighFive(false);
    }, HIGH_FIVE_RESET_MS);
  };

  return (
    <div>
      <div className="homepage-model-wrap">
        <div
          className={`model-loading ${
            isModelLoading ? "model-loading-visible" : "model-loading-hidden"
          }`}
          aria-hidden="true"
        >
          <span className="model-loading-spinner"></span>
        </div>
        <model-viewer
          ref={modelViewerRef}
          className={isModelLoading ? "model-hidden" : "model-ready"}
          src={homepageModel}
          alt="3D model"
          tone-mapping="neutral"
          camera-controls
          camera-orbit="0deg 75deg 95%"
          min-camera-orbit="auto auto 75%"
          max-camera-orbit="auto auto 150%"
          auto-rotate
          auto-rotate-delay="0"
          rotation-per-second="15deg"
          interaction-prompt="none"
          exposure="0.6"
          ambient-occlusion-intensity="2"
          shadow-intensity="2"
          shadow-softness="1"
        ></model-viewer>
      </div>
      <h1>
        <span
          className={`waving-hand ${noHighFive ? "-no-high-five" : ""}`}
          onClick={refreshHighFive}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              refreshHighFive();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="High five"
        />
        Hey there! I'm Zhuo Cheng
      </h1>
      <p>
        Software Engineer @{" "}
        <a
          href="https://www.lycorp.co.jp/en/"
          target="_blank"
          rel="noreferrer noopener"
          className="highlight company-highlight"
        >
          LY Corporation
        </a>
      </p>
      <p className="activity">
        When I'm not coding, I ...
        <br />
        {ACTIVITIES.map((activity, index) => (
          <Fragment key={activity.text}>
            {index !== 0 && ", "}
            {index === ACTIVITIES.length - 1 && "and "}
            <span
              className="activity-hover-able no-wrap"
              data-emoji={activity.emoji}
              data-animation={activity.animationAttr}
            >
              {activity.text}
            </span>
          </Fragment>
        ))}
      </p>
    </div>
  );
};

export default Introduction;
