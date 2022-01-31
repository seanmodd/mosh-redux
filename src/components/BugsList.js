import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadBugs,
  unresolvedBugsSelector,
  bugsByUserSelector,
} from "../store/bugs";

const BugsList = () => {
  const dispatch = useDispatch();
  const bugs = useSelector(unresolvedBugsSelector);

  // const bugs = useSelector(bugsByUserSelector(1));
  console.log("These are bugs: ", bugs);
  useEffect(() => {
    dispatch(loadBugs());
  }, []);

  return (
    <>
      {bugs.map((bug) => (
        <li key={bug.id}>{bug.description}</li>
      ))}
      <div>here</div>
    </>
  );
};

export default BugsList;
