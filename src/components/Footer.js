import Image from "next/image";
import React from "react";
import styles from "@/styles/Home.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <p target="_blank" rel="noopener noreferrer">
          Powered by
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </p>
      </footer>
    </>
  );
};

export default Footer;
