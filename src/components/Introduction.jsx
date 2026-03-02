import { Fragment, useEffect, useRef, useState } from "react";
import VoxelHippo from "./VoxelHippo";
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

const Introduction = () => {
  const [noHighFive, setNoHighFive] = useState(false);
  const highFiveTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (highFiveTimerRef.current) {
        clearTimeout(highFiveTimerRef.current);
      }
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
        <VoxelHippo />
        <p className="model-credit">
          model designed by my wife{" "}
          <span style={{ fontStyle: "normal" }}>:)</span>
        </p>
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
