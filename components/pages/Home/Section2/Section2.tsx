import { useEffect, useState } from "react";
import { Container } from "../../../Container";
import { Technologies } from "../../../Technologies";
import { TextSection } from "../../../TextSection";
import { useTextSizeChange } from "./hooks";
import styles from "./Section2.module.scss";

const Section2: React.FC = () => {
  const { size } = useTextSizeChange(45, 110);
  const [fontSize, setFontSize] = useState(size);

  useEffect(() => {
    setFontSize(size);
  }, [size]);

  return (
    <div className={styles.container} id={"services"}>
      <h1 className={styles.title} style={{ fontSize: fontSize }}>
        My Skills
      </h1>

      <Container direction="left">
        <TextSection
          title={"Frontend Technologies"}
          description={`I have been working on REACT, NEXT,Tailwind, Redux, SASS, Storybooks, HTML5, CSS3, MUI, AntD and 
          some experience in Babylon. I am expert in transforming Figma (or whatever you use) designs into high-performant, elegant looking designs. 
          I have worked on complex UIs and have a command on mobile first designs for better responsiveness`}
        />
      </Container>

      <Container direction="right">
        <TextSection
          title={"Backend Stack"}
          description={`
        I have experience on NodeJS, NestJS, Express, GraphQL and if we talk about ORMs I have worked with Mongoose, TypeORM, Sequelize and Prisma. 
        I have worked on projects requiring low-latency architecture along-with handling sensitive data. 
        I have also developed micro-services in few projects and love them for their efficiency. As a side hustle, I am learning about
        blockchain and Web3 technologies, and have learned the Solidity for making smart contracts.`}
        />
      </Container>

      <Container direction="left" index={2}>
        <TextSection
          title={"Databases"}
          description={`As you know the Databases are backbone of an application, and I have experience in working with 
          MySQL, PostgreSQL and MongoDB for the major part of my career. I know about the use cases of these
          and I am able to differentiate between the pros and cons. Moreover I have participated in designing the architecture
          and also optimizing the existing ones, through adding or in some cases removing the Indexes, changing the structure 
          because of change in requirements and according to data loads needed and ofc DB Caching. I have also worked on load balancing
          and DB partitioning in regards of making it scalable and highle available.`}
        />
      </Container>
      <Container direction="right" index={2}>
        <TextSection
          title={"Related Skills"}
          description={`Apart from all the skills mentioned above, I have worked a little on Devops where required, using Nginx and load balancing. 
          I am also a great Team Player, can work synchronously or asynchronously, whatever is required. I have lead the projects , mentoring juniors and 
          communicating with stake holders. I have also no hesitation in learning new technologies.`}
        />
      </Container>
    </div>
  );
};

export default Section2;
