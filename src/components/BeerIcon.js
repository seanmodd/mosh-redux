import React from "react";
import { FaBeer } from "react-icons/fa";
import styles from "@/styles/Home.module.css";

const BeerIcon = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className={styles.number}>1</p>
        <FaBeer className={styles.icons} />
      </div>
    </>
  );
};

export default BeerIcon;
