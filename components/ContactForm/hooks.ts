import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { formSchema } from "./form.schema";
import { useEmail } from "../../hooks";

export const useContactForm = () => {
  const { sendEmail } = useEmail();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema), mode: "onChange" });

  const onSubmit = handleSubmit((data) => {
    sendEmail(data);
  });

  return { onSubmit, register, errors };
};
