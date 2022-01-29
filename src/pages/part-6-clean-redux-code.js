import styles from "@/styles/Home.module.css";
import Layout from "src/components/Layout";
import Link from "next/link";
import BeerIcon from "src/components/BeerIcon";
// redux
import { bugAdded, bugResolved } from "src/store/bugs";
import configureStore from "src/store/configureStore";

export default function Home() {
  const store = configureStore();
  store.dispatch(bugAdded("Bug 1"));
  store.dispatch(bugAdded("Bug 666"));

  store.dispatch(bugResolved(1));

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
