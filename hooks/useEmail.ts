import emailjs from "@emailjs/browser";
import { notification } from "antd";

export const useEmail = () => {
  const sendEmail = (data: any) => {
    const templateParams = {
      from_name: data.name,
      message: data.description,
      reply_to: data.email,
    };
    emailjs
      .send(
        "service_kfpkgh6",
        "template_jss7nj8",
        templateParams,
        "wAgf8taZtC8OZhWSE"
      )
      .then(
        function (response) {
          notification.success({ message: "Mail successfully sent" });
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return { sendEmail };
};
