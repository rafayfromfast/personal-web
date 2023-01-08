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
