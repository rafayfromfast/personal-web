import { Twitter, Facebook, Linkedin } from "../../../../icons/index";
import styles from "./SocialBar.module.scss";

export const socials = [
  {
    link: "https://www.facebook.com/profile.php?id=100088359412691&sk=about",
    icon: <Facebook className={styles.icon} />,
  },
  { link: "./twitter", icon: <Twitter className={styles.icon} /> },
  { link: "./linkedIn", icon: <Linkedin className={styles.icon} /> },
];
