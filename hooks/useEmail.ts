import emailjs from "@emailjs/browser";
import { notification } from "antd";

export const useEmail = () => {
  const sendEmail = (data: any) => {
    notification.info({
      message:
        "You can also email me directly. Check the end of page for email.",
    });
    const templateParams = {
      from_name: data.name,
      message: data.description,
      reply_to: data.email,
    };

    // Yes I know the following should be in .env.
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
          notification.error({
            message:
              "Can't send the message now. You can email me directly through the link in the end of page.",
          });
        }
      );
  };

  return { sendEmail };
};
