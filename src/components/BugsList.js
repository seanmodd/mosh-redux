import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadBugs,
  unresolvedBugsSelector,
  bugsByUserSelector,
  resolveBug,
  addBug,
  deleteBug,
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
      <button onClick={() => dispatch(loadBugs())}>Load Again</button>
      <button onClick={() => dispatch(addBug("new bug"))}>Add Bug</button>
      {bugs.map((bug) => (
        <li key={bug.id}>
          {bug.id}. {bug.description}
          {bug.resolved ? " (resolved)" : "not resolved"}
          <button onClick={() => dispatch(resolveBug(bug.id))}>Resolve</button>
          <button onClick={() => dispatch(deleteBug(bug.id))}>Delete</button>
        </li>
      ))}
      <div>here</div>
    </>
  );
};

export default BugsList;
