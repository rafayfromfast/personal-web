import classnames from "classnames";
import styles from "./Button.module.scss";

export enum ButtonTypes {
  TEXT = "text",
  CONTAINED = "contained",
}

interface Props {
  ///***------+ */
  title: string;
  onClick?: () => void;
  onHover?: () => void;
  type?: ButtonTypes;
  rounded?: boolean;
  className?: string;
}

const Button: React.FC<Props> = ({
  title,
  onClick,
  type = ButtonTypes.TEXT,
  onHover,
  rounded,
  className,
}) => {
  const buttonClasses = classnames(styles[type], className, {
    [styles.rounded]: rounded,
  });
  return (
    <button onClick={onClick} onMouseOver={onHover} className={buttonClasses}>
      {title}
    </button>
  );
};

export default Button;
