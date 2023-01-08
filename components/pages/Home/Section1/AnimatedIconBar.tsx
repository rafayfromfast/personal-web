import classNames from "classnames";
import styles from "./AnimatedIconBar.module.scss";

interface Props {
  icon: React.ReactNode;
  background?: string;
  className?: string;
}

const AnimatedIconBar: React.FC<Props> = ({
  icon,
  className,
  background = "#5A6DED",
}) => {
  const containerClasses = classNames(styles.bar, className);

  return (
    <div className={containerClasses} style={{ background: background }}>
      <div className={styles["icon-container"]}>{icon}</div>
    </div>
  );
};

export default AnimatedIconBar;
