import styles from "@/styles/Home.module.css";
import Layout from "src/components/Layout";
import Link from "next/link";
import BeerIcon from "src/components/BeerIcon";
// redux
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  unresolvedBugsSelector,
} from "src/store/bugs";
import configureStore from "src/store/configureStore";
import { projectAdded } from "src/store/projects";

export default function Home() {
  const store = configureStore();
  store.dispatch(projectAdded({ name: "Project 1", description: "Lorem etc" }));
  store.dispatch(bugAdded({ description: "Bug 1 description lorem ipsum" }));
  store.dispatch(bugRemoved({ description: "Bug REMOVED" }));
  store.dispatch(bugAdded({ description: "Bug 6666 description lorem ipsum" }));
  store.dispatch(bugAdded({ description: "Bug  1212343245" }));
  store.dispatch(bugResolved({ id: 3 }));

  const unresolvedBugs = unresolvedBugsSelector(store.getState());
  console.log("This is unresolvedBugs we made: ", unresolvedBugs);
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
