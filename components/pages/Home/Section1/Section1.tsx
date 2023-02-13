import { notification, Typography } from "antd";
import { ButtonTypes, CustomButton } from "../../../Button";
import { AnimateOnScroll } from "../../../AnimateOnScroll";
import { AnimateFromDirection } from "../../../AnimateOnScroll/AnimateOnScroll";

import styles from "./Section1.module.scss";
import Link from "next/link";

const Section1: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={"/profile.png"} className={styles.avatar} />
      </div>

      <AnimateOnScroll direction={AnimateFromDirection.TOP}>
        <Typography.Title level={4} className={styles.text}>
          {`A Full Stack Engineer with around 4 years of experience in cuttin edge technologies.`}
          {`This is just a showcase of my frontend skills. To see the code of this project you can `}
          <Link
            href={"https://github.com/rafayfromfast/personal-web"}
            target={"_blank"}
          >
            visit here.
          </Link>
          <br />
          {`If you want to see my experiences, you can get my `}
          <strong>
            {" "}
            <Link
              href={
                "https://drive.google.com/file/d/1x3_WmPT6WfGnS5lMvvhMeQgfRDDO68Au/view?usp=sharing"
              }
              target={"_blank"}
            >
              resume here
            </Link>
          </strong>
        </Typography.Title>
      </AnimateOnScroll>

      <AnimateOnScroll direction={AnimateFromDirection.RIGHT}>
        <Link href={"#contact"} scroll={false}>
          <CustomButton
            type={ButtonTypes.CONTAINED}
            title={"Reach Out"}
            rounded={true}
          />
        </Link>
      </AnimateOnScroll>
    </div>
  );
};

export default Section1;
