import Image from "next/image";
import React, { memo, useState } from "react";
import styles from "./Slider.module.scss";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";

function Slider2() {
  const [imgState, setImgState] = useState(img1);
  const [btns, setBtns] = useState([
    "vasa",
    "vasa",
    "vasa",
    "vasa",
    "vasa",
    "vasa",
    "vasa",
    "vasa",
  ]);
  const [btnsActive, setBtnsActive] = useState(styles.btns);

  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <div className={styles.img1}></div>
        <div className={styles.img2}></div>
      </div>
      <div className={styles.listBtns}>
        {btns.map((item, index) => (
          <button className={btnsActive} key={index}>
            {/* {index} */}
          </button>
        ))}
      </div>
    </div>
  );
}
const Slider = memo(Slider2);

export default Slider;
