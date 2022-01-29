import styles from "@/styles/Home.module.css";
import Footer from "src/components/Footer";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Redux with Mosh </h1>
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
