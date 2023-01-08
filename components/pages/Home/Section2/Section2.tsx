import { useEffect, useState } from "react";
import { Container } from "../../../Container";
import { TextSection } from "../../../TextSection";
import { useTextSizeChange } from "./hooks";
import styles from "./Section2.module.scss";

const Section2: React.FC = () => {
  const { size } = useTextSizeChange(20, 90);
  const [fontSize, setFontSize] = useState(size);

  useEffect(() => {
    setFontSize(size);
  }, [size]);

  return (
    <div className={styles.container} id={"services"}>
      <h1 className={styles.title} style={{ fontSize: fontSize }}>
        Offered Services
      </h1>

      <Container direction="left">
        <TextSection
          title={"Web Development"}
          description={`Looking to build a professional, user-friendly website? Our team of
          experienced web developers can help bring your vision to life. 

          From custom website design and layout to advanced features and
          functionality, we have the skills and expertise to deliver a website
          that meets your unique needs and goals. We also offer ongoing
          maintenance and support to ensure your site stays up-to-date and
          running smoothly. Contact us to learn more about how our web
          development services can help your business succeed online.`}
        />
      </Container>

      <Container direction="right">
        <TextSection
          title={"Machine Learning"}
          description={`
        Our company specializes in providing professional machine learning services to help businesses and organizations harness the power of artificial intelligence and data analysis. Our team of expert data scientists and engineers can help you build and implement custom machine learning models that can improve your operations, increase efficiency, and drive growth. From predicting customer behavior and optimizing supply chain management to improving fraud detection and enhancing image and voice recognition, we can provide the expertise and technology you need to get the most out of your data. Contact us to learn more about how our machine learning services can benefit your organization.`}
        />
      </Container>

      <Container direction="left" index={2}>
        <TextSection
          title={"IoT Services"}
          description={`Our company specializes in providing comprehensive Internet of Things (IoT) services for businesses and organizations. We help our clients leverage the power of connected devices and sensors to collect and analyze data, automate processes, and improve efficiency. Our team of experts works with you to design, implement, and manage custom IoT solutions that meet your specific needs and goals. From smart buildings and manufacturing to transportation and healthcare, we have the expertise and resources to help you transform your business with IoT.`}
        />
      </Container>
      <Container direction="right" index={2}>
        <TextSection
          title={"App Development"}
          description={`Mobile apps and progressive web apps (PWAs) can enhance your company's reach and engagement by providing a seamless and convenient experience for your customers on their mobile devices. With a mobile app or PWA, you can easily showcase your products and services, send push notifications, and gather valuable user data to improve and grow your business. Mobile apps and PWAs are also cost-effective and can be developed and updated quickly, making them a valuable asset for your company.`}
        />
      </Container>
    </div>
  );
};

export default Section2;
