import Head from "next/head";
import { useEffect, useRef } from "react";
import { BannerParallax } from "../components";
import { Section1, Section2, Section3 } from "../components/pages";
import { useSetScrollValueContext } from "../hooks";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const setValue = useSetScrollValueContext();

  useEffect(() => {
    const servicesTop = (servicesRef.current?.offsetTop || 200) - 200;
    const contactTop = (contactRef.current?.offsetTop || 200) - 200;
    function handleScroll() {
      const scrollPos = window.scrollY;

      if (scrollPos > contactTop) {
        setValue("#contact");
      } else if (scrollPos > servicesTop) {
        setValue("#services");
      } else {
        setValue("#home");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.container}>
      <Head>
        <title>S M K</title>
        <meta
          name="keywords"
          content="IT services, web development, software services, software development,IoT solutions, Cloud Solutions, IT support"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SMK Technologies (SMC) Pvt. Ltd" />
        <meta
          name="description"
          content="We offer a wide range of IT services, including web development, mobile app developement, IoT solutions and custom software development. Contact us for more information."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <BannerParallax heading="We achieve Breakthroughs for you" />
        <Section1 />
        <br />
        <br />
        <div ref={servicesRef} />
        <Section2 />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div ref={contactRef} />
        <Section3 />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
    </div>
  );
}
