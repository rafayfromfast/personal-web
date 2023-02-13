import React, { useEffect, useRef, useState } from "react";
import { techIcons } from "./consts";
import styles from "./Technologies.module.scss";

const Technologies: React.FC = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const [items, setItems] = useState([...techIcons, ...techIcons]);

  const btnRef = useRef<HTMLButtonElement>(null);

  const handleNextClick = () => {
    const first = items[0];
    // setItems([...items.splice(1), first]);
    if (currentIndex === items.length - 1) {
      setCurrentIndex(0);
      setTranslateValue(0);
    } else {
      setCurrentIndex(currentIndex + 1);
      setTranslateValue(translateValue - 100 / items.length);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(items.length - 1);
      setTranslateValue(-((items.length - 1) * (100 / items.length)));
    } else {
      setCurrentIndex(currentIndex - 1);
      setTranslateValue(translateValue + 100 / items.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      btnRef.current?.click();
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const itemStyle = {
    transform: `translateX(${translateValue}%)`,
    transition: "transform 2.3s",
  };

  return (
    <div className={styles.container}>
      <button onClick={handlePrevClick}>Prev</button>
      <div className={styles.icons} style={itemStyle}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            {item}
          </div>
        ))}
      </div>
      <button onClick={handleNextClick} ref={btnRef}>
        Next
      </button>
    </div>
  );
};

export default Technologies;
