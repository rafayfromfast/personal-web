import styles from "./Heading.module.scss";
interface Props {
  text: string;
}

const BrokenHeading: React.FC<Props> = ({ text }) => {
  return (
    <div className={styles.ui}>
      {Array(40)
        .fill(1)
        .map((i, idx) => (
          <div className={styles.text} id={`${idx}`} key={idx}>
            {text}
          </div>
        ))}
    </div>
  );
};

export default BrokenHeading;
