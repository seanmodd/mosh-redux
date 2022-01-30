import React from "react";
import Layout from "src/components/Layout";
import * as actions from "src/store/api";
import { loadBugs, addBug, resolveBug, assignBugToUser } from "src/store/bugs";
import StoreContext from "src/contexts/storeContext";

export default function Home() {
  const store = React.useContext(StoreContext);
  console.log("This is the store: ", store);
  return <Layout />;
}
