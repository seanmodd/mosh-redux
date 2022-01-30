import Layout from "src/components/Layout";
import configureStore from "src/store/configureStore";
import * as actions from "src/store/api";
import { loadBugs, addBug, resolveBug } from "src/store/bugs";

export default function Home() {
  const store = configureStore();

  store.dispatch(loadBugs());
  setTimeout(() => {
    store.dispatch(resolveBug(1));
  }, 3000);
  // store.dispatch(addBug({ description: "New bug" }));

  return <Layout />;
}
