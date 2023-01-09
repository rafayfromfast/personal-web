import classNames from "classnames";
import styles from "./AnimatedLogo.module.scss";

interface Props {
  title: string;
  innerText: string;
  bigger?: boolean;
}

const AnimatedLogo: React.FC<Props> = ({
  title,
  innerText,
  bigger = false,
}) => {
  const classes = classNames(styles.container, { [styles.bigger]: bigger });
  return (
    <div className={classes}>
      <h1 className={styles.upper}>{title}</h1>
      <h2 className={styles.inner}>{innerText}</h2>
      <h1 className={styles.lower}>{title}</h1>
    </div>
  );
};

export default AnimatedLogo;
