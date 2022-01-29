import React from "react";
import customStore from "src/redux/customStore";

const Test = () => {
  // console.log("This is customStore.getState : ", customStore.getState());
  customStore.state = 1;
  console.log("This is customStore.state : ", customStore.state);
  return (
    <>
      <h1>Custom Store Tests</h1>
    </>
  );
};

export default Test;
