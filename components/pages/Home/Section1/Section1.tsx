import { Typography } from "antd";
import { ButtonTypes, CustomButton } from "../../../Button";
import { AnimateOnScroll } from "../../../AnimateOnScroll";
import { AnimateFromDirection } from "../../../AnimateOnScroll/AnimateOnScroll";
import TestLogo from "./TestIcon";

import styles from "./Section1.module.scss";
import AnimatedIconBar from "./AnimatedIconBar";
import Link from "next/link";

const Section1: React.FC = () => {
  return (
    <div className={styles.container}>
      <AnimateOnScroll direction={AnimateFromDirection.TOP}>
        <Typography.Title level={4} className={styles.text}>
          {`We help our clients succeed by creating brand identities,
digital experiences, and print materials.`}
        </Typography.Title>
      </AnimateOnScroll>

      <AnimateOnScroll direction={AnimateFromDirection.RIGHT}>
        <Link href={"#contact"} scroll={false}>
          <CustomButton
            type={ButtonTypes.CONTAINED}
            title={"Contact Us"}
            rounded={true}
          />
        </Link>
      </AnimateOnScroll>
    </div>
  );
};

export default Section1;
