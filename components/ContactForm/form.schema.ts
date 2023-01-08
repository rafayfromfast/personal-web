import * as yup from "yup";

export const formSchema = yup.object({
  name: yup.string().required("Please specify your name"),
  email: yup
    .string()
    .email("This field must be a valid email address")
    .required("This is a required field"),
  description: yup.string(),
});
