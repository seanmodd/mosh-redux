import styles from "@/styles/Home.module.css";
import Layout from "src/components/Layout";

export default function Home() {
  return (
    <Layout>
      <main className={styles.grid}>
        <div className={styles.card}>
          <p>Redux learning is fun</p>
        </div>
        <div className={styles.card}>
          <p>Redux learning is easy</p>
        </div>
        <div className={styles.card}>
          <p>Redux learning is easy</p>
        </div>
      </main>
    </Layout>
  );
}
