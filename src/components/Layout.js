import styles from "@/styles/Home.module.css";
import Footer from "src/components/Footer";
import React from "react";
import BeerIcon from "src/components/BeerIcon";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className={styles.title}>Welcome to Redux with Mosh </h1>
          <BeerIcon />
        </div>
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
