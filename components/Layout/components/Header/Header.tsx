import Link from "next/link";
import { ButtonTypes, CustomButton } from "../../../Button";
import { NavButtons } from "../../mocks";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles["title-container"]}>
        <h1 className={styles.title}>SMK</h1>

        <h2 className={styles["sub-title"]}>Technologies</h2>
      </div>

      <div className={styles["button-bar"]}>
        {NavButtons.map((button, idx) => (
          <Link href={button.link} scroll={false} key={idx}>
            <CustomButton title={button.title} type={ButtonTypes.TEXT} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
