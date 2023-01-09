import { Mail, Phone, Location2 } from "../../../../icons/index";

import { ContactIcon } from "../ContactIcon";

import colors from "styles/colors.module.scss";
import styles from "./ContactItems.module.scss";
import { ContactItem } from "../../../ContactItem";

const ContactItems: React.FC = () => {
  return (
    <div className={styles.container}>
      <ContactItem
        icon={<ContactIcon icon={<Location2 />} color={colors.teal} />}
        content={"711, Khudadad Heights, Islamabad"}
        link={
          "https://www.google.com/maps/place/Smackiya+Headquarters/@33.6893872,72.9790186,15z/data=!4m5!3m4!1s0x0:0x17f6ddfd469841cf!8m2!3d33.6893872!4d72.9790186"
        }
      />

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
    </div>
  );
};

export default ContactItems;
