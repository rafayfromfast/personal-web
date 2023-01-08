import Link from "next/link";
import classNames from "classnames";

import styles from "./ContactItem.module.scss";

import { IContactItemProps } from "./ContactItem.prop";

const ContactItem: React.FC<IContactItemProps> = ({ icon, content, link }) => {
  const containerClasses = classNames(styles.container, {
    [styles.link]: link,
  });
  return (
    <Link href={link || ""}>
      <div className={containerClasses}>
        {icon}
        <p className={styles.content}>{content}</p>
      </div>
    </Link>
  );
};

export default ContactItem;
