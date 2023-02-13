import { notification } from "antd";
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

    notification.info({
      message: "Features",
      duration: 20,
      description: `Hover on the logo on header. Move around mouse on banner, and scroll through the website to checkout skills and contact form.`,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.container}>
      <Head>
        <title>Rafay Abbas</title>
        <meta
          name="keywords"
          content="Fullstack Engineer, Fullstack Developer, MERN Developer, MERN Stack, Frontend Engineer, React, React Developer"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Rafay Abbas" />
        <meta
          name="description"
          content="I am Fullstack Engineer, working on MERN stack, having vast and diverse industry experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <BannerParallax heading="FULLSTACK" />
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
