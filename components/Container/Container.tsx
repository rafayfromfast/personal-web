import classNames from "classnames";
import { AnimateOnScroll } from "../AnimateOnScroll";
import { AnimateFromDirection } from "../AnimateOnScroll/AnimateOnScroll";
import styles from "./Container.module.scss";

interface Props {
  direction: "left" | "right";
  index?: 1 | 2;
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ direction, children, index = 1 }) => {
  const classes = classNames(
    styles.container,
    styles[direction],
    styles[direction + "__" + index]
  );
  return (
    <AnimateOnScroll
      direction={
        direction === "right"
          ? AnimateFromDirection.RIGHT
          : AnimateFromDirection.LEFT
      }
    >
      <div className={classes}>
        <div className={styles.content}>{children}</div>
      </div>
    </AnimateOnScroll>
  );
};

export default Container;
