import styles from "@/styles/Home.module.css";
import Layout from "src/components/Layout";
import Link from "next/link";
import BeerIcon from "src/components/BeerIcon";

export default function Home() {
  return (
    <Layout>
      <BeerIcon />
      <Link href="/results">
        <div className={styles.cardbutton}>View Results</div>
      </Link>
      <main className={styles.grid}>
        <div className={styles.card}>
          <form>
            <input placeholder="Name" />
            <textarea placeholder="description" />
            <input placeholder="url" />

            <button>Add</button>
          </form>
        </div>
        <div className={styles.card}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <button>+ Beer</button>
            <button>- Beer</button>
            <button>Reset</button>
          </div>
        </div>
      </main>
    </Layout>
  );
}
