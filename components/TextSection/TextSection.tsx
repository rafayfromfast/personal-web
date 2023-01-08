import { Typography } from "antd";
import styles from "./TextSection.module.scss";

interface Props {
  title: string;
  description: string;
}

const TextSection: React.FC<Props> = ({ title, description }) => {
  return (
    <>
      <Typography.Title className={styles.title}>{title}</Typography.Title>
      <Typography.Text className={styles.description}>
        {description}
      </Typography.Text>
    </>
  );
};

export default TextSection;
