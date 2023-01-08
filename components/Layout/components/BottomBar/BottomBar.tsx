import Link from "next/link";
import { useScrollValueContext } from "../../../../hooks";
import { ButtonTypes, CustomButton } from "../../../Button";
import { NavButtons } from "../../mocks";
import styles from "./BottomBar.module.scss";

const Header: React.FC = () => {
  const value = useScrollValueContext();

  return (
    <div className={styles.container}>
      <div className={styles["button-bar"]}>
        {NavButtons.map((button, idx) => (
          <Link
            href={button.link}
            scroll={false}
            key={idx}
            className={styles.btn}
          >
            <CustomButton
              title={button.title}
              type={ButtonTypes.TEXT}
              className={value === button.link ? styles.selected : ""}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
