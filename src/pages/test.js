import React from "react";
import customStore from "src/redux/customStore";
import * as actions from "src/redux/actions";

const Test = () => {
  // console.log("This is customStore.getState : ", customStore.getState());

  console.log("This is customStore.getState() : ", customStore.getState());
  customStore.dispatch(actions.bugAdded("Bug 1"));
  console.log("This is customStore.getState() : ", customStore.getState());

  return (
    <>
      <h1>Custom Store Tests</h1>
    </>
  );
};

export default Test;
