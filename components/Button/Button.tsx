import classnames from "classnames";
import styles from "./Button.module.scss";

export enum ButtonTypes {
  TEXT = "text",
  CONTAINED = "contained",
}

interface Props {
  title: string;
  onClick?: () => void;
  onHover?: () => void;
  type?: ButtonTypes;
  rounded?: boolean;
}

const Button: React.FC<Props> = ({
  title,
  onClick,
  type = ButtonTypes.TEXT,
  onHover,
  rounded,
}) => {
  console.log("title :", title);
  const buttonClasses = classnames(styles[type], { [styles.rounded]: rounded });
  return (
    <button onClick={onClick} onMouseOver={onHover} className={buttonClasses}>
      {title}
    </button>
  );
};

export default Button;