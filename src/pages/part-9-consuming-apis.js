import Layout from "src/components/Layout";
import configureStore from "src/store/configureStore";
import * as actions from "src/store/api";
import { loadBugs } from "src/store/bugs";

export default function Home() {
  const store = configureStore();

  // UI Layer
  // below does the exact same as: store.dispatch(actions.apiCallBegan());
  // but we don't want to expose the store to the UI layer
  store.dispatch(loadBugs());

  setTimeout(() => store.dispatch(loadBugs()), 3000);

  return <Layout />;
}
