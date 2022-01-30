import Layout from "src/components/Layout";
import configureStore from "src/store/configureStore";
import * as actions from "src/store/api";
import { loadBugs } from "src/store/bugs";

export default function Home() {
  const store = configureStore();

  // UI Layer
  store.dispatch(loadBugs());

  // store.dispatch(actions.apiCallBegan());

  return <Layout />;
}
