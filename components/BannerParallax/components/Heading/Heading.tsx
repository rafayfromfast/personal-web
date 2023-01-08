import styles from "./Heading.module.scss";
interface Props {
  text: string;
}

const BrokenHeading: React.FC<Props> = ({ text }) => {
  console.log("text :", text.split(""));
  const onAnimationEnd = () => {
    console.log("Animation End");
  };
  return (
    <div className={styles.ui}>
      {Array(40)
        .fill(1)
        .map((i, idx) => (
          <div
            className={styles.text}
            id={`${idx}`}
            onAnimationEnd={onAnimationEnd}
            key={idx}
          >
            {text}
          </div>
        ))}
    </div>
  );
};

export default BrokenHeading;
