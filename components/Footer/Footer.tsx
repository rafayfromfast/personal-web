import Link from "next/link";
import { Location2, Mail, Phone } from "../../icons";
import { AnimatedLogo } from "../AnimatedLogo";
import { ContactIcon } from "../ContactForm/components";
import { ContactItem } from "../ContactItem";
import styles from "./Footer.module.scss";
import colors from "styles/colors.module.scss";
import { socials } from "../ContactForm/components/SocialBar/mocks";

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <ContactItem
          icon={<ContactIcon icon={<Phone />} color={colors.yellow2} />}
          content={"+92 334 1801009"}
          link={"tel:+923341801009"}
        />

        <ContactItem
          icon={<ContactIcon icon={<Mail />} color={colors.blue} />}
          content={"contact@smktech.com"}
          link={"mailto:contact@smktech.com"}
        />

        <ContactItem
          icon={<ContactIcon icon={<Location2 />} color={colors.teal} />}
          content={"711, Khudadad Heights, Islamabad"}
          link={
            "https://www.google.com/maps/place/Smackiya+Headquarters/@33.6893872,72.9790186,15z/data=!4m5!3m4!1s0x0:0x17f6ddfd469841cf!8m2!3d33.6893872!4d72.9790186"
          }
        />
      </div>

      <div className={styles["logo-container"]}>
        <AnimatedLogo title={"SMK"} innerText={"Technologies"} bigger />
        <div className={styles.socials}>
          {socials.map(({ link, icon }, idx) => (
            <span className={styles.item} key={idx}>
              <Link href={link} target="_blank">
                {icon}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
