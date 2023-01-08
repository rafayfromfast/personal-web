import classNames from "classnames";
import React, { useRef, useEffect } from "react";

import styles from "./AnimateOnScroll.module.scss";

export enum AnimateFromDirection {
  LEFT = "left",
  RIGHT = "right",
  TOP = "top",
  BOTTOM = "bottom",
}

interface Props {
  children: React.ReactNode;
  className?: string;
  direction?: AnimateFromDirection;
  hideShow?: boolean;
}

const AnimateOnScroll: React.FC<Props> = ({
  children,
  className,
  direction = AnimateFromDirection.LEFT,
  hideShow,
}) => {
  const myElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Run your animation here
          myElement.current &&
            myElement.current.classList?.add(
              hideShow ? styles.show : styles[`fade-in-text-${direction}`]
            );
        }
      });
    });
    myElement.current && observer.observe(myElement.current);
  }, []);

  const containerClasses = classNames(styles.container, className);

  return (
    <div className={containerClasses} ref={myElement}>
      {children}
    </div>
  );
};

export default AnimateOnScroll;
