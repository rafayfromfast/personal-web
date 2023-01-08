import Link from "next/link";

import { socials } from "./mocks";

import styles from "./SocialBar.module.scss";

const SocialBar: React.FC = () => {
  return (
    <div className={styles.container}>
      {socials.map(({ link, icon }, idx) => (
        <span className={styles.item} key={idx}>
          <Link href={link} target="_blank">
            {icon}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default SocialBar;
