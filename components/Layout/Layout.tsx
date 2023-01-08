import { ScrollValueContextProvider } from "../ContextProviders";
import { BottomBar } from "./components/BottomBar";
import { Header } from "./components/Header";
import styles from "./Layout.module.scss";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ScrollValueContextProvider>
      <div className={styles.container}>
        <div className={styles["overlay-left"]} />
        <div className={styles["overlay-right"]} />
        <Header />
        <BottomBar />
        {children}
      </div>
    </ScrollValueContextProvider>
  );
};

export default Layout;
