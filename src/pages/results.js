import styles from "@/styles/Home.module.css";
import Layout from "src/components/Layout";
import Link from "next/link";
import BeerIcon from "src/components/BeerIcon";

export default function Home() {
  return (
    <Layout>
      <BeerIcon />
      <Link href="/">
        <div className={styles.cardbutton}>Go Home!</div>
      </Link>
      <main className={styles.grid}>
        <div className={styles.card}>
          <p className={styles.result}>Name is: </p>
          <p className={styles.result}>Description is: </p>
          <p className={styles.result}>URL is: </p>
        </div>
        <div className={styles.card}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p className={styles.result}>Beer Count: </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
