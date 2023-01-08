import classNames from "classnames";
import React from "react";

import { IInputFieldProps, InputFieldVariants } from "./InputField.prop";

import styles from "./InputField.module.scss";

type Ref = HTMLTextAreaElement | HTMLInputElement;

const InputField = React.forwardRef<Ref, IInputFieldProps>(function Input(
  {
    name,
    error,
    value,
    className,
    variant = InputFieldVariants.Field,
    ...props
  },
  ref
) {
  const classes = classNames(styles[variant], className);

  const combinedProps = {
    ...props,
    name,
    value,
    className: classes,
  };

  return (
    <div className={styles.container}>
      {variant === InputFieldVariants.TextArea ? (
        <textarea
          {...combinedProps}
          ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
        />
      ) : (
        <input
          {...combinedProps}
          ref={ref as React.ForwardedRef<HTMLInputElement>}
        />
      )}
      <div className={styles.error}>{error?.message}</div>
    </div>
  );
});

export default InputField;
