import React from "react";
import { FieldError } from "react-hook-form";

export enum InputFieldVariants {
  Field = "text-field",
  TextArea = "text-area",
}

export interface IInputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  className?: string;
  error?: Partial<FieldError>;
  variant?: InputFieldVariants;
}
