import React from "react";
import Layout from "src/components/Layout";
import configureStore from "src/store/configureStore";
import * as actions from "src/store/api";
import { loadBugs, addBug, resolveBug, assignBugToUser } from "src/store/bugs";

export default function Home() {
  const store = configureStore();

  store.dispatch(loadBugs());
  setTimeout(() => {
    store.dispatch(assignBugToUser(1643576489314, 4));
  }, 3000);
  // store.dispatch(addBug({ description: "New bug" }));

  return <Layout />;
}
