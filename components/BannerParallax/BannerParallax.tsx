/* eslint-disable */
import { useEffect, useState } from "react";
import styles from "./BannerParallax.module.scss";
import { BrokenHeading } from "./components";

interface Props {
  heading: string;
}

const BannerParallax: React.FC<Props> = ({ heading }) => {
  const [parallaxRef, setParallaxRef] = useState<HTMLElement | null>(null);

  const parallax = (e: React.MouseEvent) => {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${
      50 - (_mouseY - _h) * 0.02
    }%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${
      50 - (_mouseY - _h) * 0.06
    }%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;

    if (parallaxRef) parallaxRef.style.backgroundPosition = x;
  };

  useEffect(() => {
    setParallaxRef(document.getElementById("parallax"));
  }, []);

  return (
    <div className={styles.container} id={"home"}>
      <div
        id="parallax"
        className={styles.parallax}
        onMouseMove={(e) => parallax(e)}
      >
        <div className={styles["heading-container"]}>
          <h1 className={styles.heading__top}>I AM A</h1>
          <BrokenHeading text={heading} />
          <h1 className={styles.heading__bottom}>Engineer!</h1>
        </div>
      </div>
    </div>
  );
};

export default BannerParallax;
