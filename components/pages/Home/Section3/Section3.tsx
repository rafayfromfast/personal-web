import AnimateOnScroll from "../../../AnimateOnScroll/AnimateOnScroll";
import { ContactForm } from "../../../ContactForm";
import styles from "./Section3.module.scss";

const Section3: React.FC = () => {
  return (
    <div id={"contact"} className={styles.container}>
      <AnimateOnScroll hideShow={true}>
        <ContactForm />
      </AnimateOnScroll>
    </div>
  );
};

export default Section3;
