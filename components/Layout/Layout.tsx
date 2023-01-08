import { Header } from "./components/Header";
import styles from "./Layout.module.scss";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles["overlay-left"]} />
      <div className={styles["overlay-right"]} />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
