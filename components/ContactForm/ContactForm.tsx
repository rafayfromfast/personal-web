import classNames from "classnames";

import { InputField, InputFieldVariants } from "../InputField";

import { useContactForm } from "./hooks";
import { ContactItems, SocialBar } from "./components";

import styles from "./ContactForm.module.scss";
import { ButtonTypes, CustomButton } from "../Button";

const ContactForm: React.FC = () => {
  const { register, errors, onSubmit } = useContactForm();

  const formClasses = classNames(styles.form);
  const contentClasses = classNames(styles.content);

  return (
    <div className={styles.container}>
      <div className={styles["inner-container"]}>
        <div className={styles["form-container"]}>
          <form onSubmit={onSubmit} className={formClasses}>
            <InputField
              {...register("name")}
              placeholder="Enter your name"
              error={errors.name}
            />
            <InputField
              {...register("email")}
              placeholder="Enter your email"
              error={errors.email}
            />
            <InputField
              {...register("description")}
              placeholder="Go ahead, We are listening..."
              error={errors.description}
              variant={InputFieldVariants.TextArea}
            />

            <CustomButton
              type={ButtonTypes.CONTAINED}
              title={"Submit"}
              rounded={true}
              className={styles.btn}
            />
          </form>

          <div className={contentClasses}>
            <div className={styles.upper}>
              <h1>Get In Touch</h1>

              <h2>
                We are here for you!
                <br />
                How can we help?
              </h2>
            </div>

            {/* <FromLaptop> */}
            <ContactItems />
            {/* </FromLaptop> */}
          </div>
        </div>
        <SocialBar />
      </div>

      {/* <UntilLaptop>
        <ContactItems />
      </UntilLaptop> */}
    </div>
  );
};

export default ContactForm;
