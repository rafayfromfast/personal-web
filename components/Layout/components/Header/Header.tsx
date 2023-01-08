import Link from "next/link";
import { ButtonTypes, CustomButton } from "../../../Button";
import styles from "./Header.module.scss";

const buttons = [
  { title: "Home", link: "" },
  { title: "Services", link: "#services" },
  { title: "Contact", link: "#contact" },
  { title: "Portfolio", link: "" },
];

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles["title-container"]}>
        <h1 className={styles.title}>SMK</h1>

        <h2 className={styles["sub-title"]}>Technologies</h2>
      </div>

      <div className={styles["button-bar"]}>
        {buttons.map((button, idx) => (
          <Link href={button.link} scroll={false} key={idx}>
            <CustomButton title={button.title} type={ButtonTypes.TEXT} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
