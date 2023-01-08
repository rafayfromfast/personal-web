import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { formSchema } from "./form.schema";

export const useContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema), mode: "onChange" });

  const onSubmit = handleSubmit((data) => {
    console.log("Submitted data ==> ", data);
  });

  return { onSubmit, register, errors };
};
