import { IContactIconProps } from "./ContactIcon.prop";

import styles from "./ContactIcon.module.scss";

const ContactIcon: React.FC<IContactIconProps> = ({ icon, color }) => {
  return (
    <div className={styles.container} style={{ borderColor: color }}>
      {icon}
    </div>
  );
};
export default ContactIcon;
