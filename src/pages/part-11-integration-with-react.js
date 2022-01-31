import React from "react";
import BugsList from "src/components/BugsList";

import Layout from "src/components/Layout";
import * as actions from "src/store/api";
import { loadBugs, addBug, resolveBug, assignBugToUser } from "src/store/bugs";

export default function Home() {
  //

  return (
    <>
      <Layout>
        <BugsList />
      </Layout>
    </>
  );
}
