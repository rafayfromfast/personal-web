import styles from "./AnimatedLogo.module.scss";

interface Props {
  title: string;
  innerText: string;
}

const AnimatedLogo: React.FC<Props> = ({ title, innerText }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.upper}>{title}</h1>
      <h2 className={styles.inner}>{innerText}</h2>
      <h1 className={styles.lower}>{title}</h1>
    </div>
  );
};

export default AnimatedLogo;
