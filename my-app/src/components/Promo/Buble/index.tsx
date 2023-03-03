import React from "react";
import { clearInterval } from "timers";
import styles from "./Buble.module.scss";

const randomNum = (x: number): number => {
  return Math.floor(Math.random() * x);
};

export default function Buble() {
  React.useEffect(() => {
    const wrapper = document.getElementById("bubble-wrapper") as HTMLElement;

    const animateBubble = (x: number) => {
      const bubble = document.createElement("div") as HTMLElement;

      bubble.className = styles.bubble;

      bubble.style.left = `${x}px`;

      bubble.style.backgroundColor = `rgba(${randomNum(255) - 100}, ${
        randomNum(255) + 100
      }, ${randomNum(255) + 100}, 0.25)`;

      wrapper?.appendChild(bubble);

      const vasa = setTimeout(() => {
        wrapper.removeChild(bubble);
      }, 20000);

      return () => {
        clearTimeout(vasa);
      };
    };

    // window.onmousemove = (e: MouseEvent) => animateBubble(e.clientX);

    const vasa2 = setInterval(() => {
      animateBubble(randomNum(1400));
      animateBubble(randomNum(1400));
      animateBubble(randomNum(1400));
      animateBubble(randomNum(1400));
      animateBubble(randomNum(1400));
      animateBubble(randomNum(1400));
      animateBubble(randomNum(1400));
    }, 1000);

    // clearInterval(vasa2);
  }, []);

  return (
    <div className={styles.bubble__wrapper} id="bubble-wrapper">
      {/* <div className={styles.bubble}></div> */}
    </div>
  );
}
