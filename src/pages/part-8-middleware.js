import Layout from "src/components/Layout";
import Link from "next/link";
import BeerIcon from "src/components/BeerIcon";
// redux
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  unresolvedBugsSelector,
  bugAssignedToUser,
  bugsByUserSelector,
} from "src/store/bugs";
import configureStore from "src/store/configureStore";
import { projectAdded } from "src/store/projects";
import { userAdded } from "src/store/users";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const store = configureStore();

  // store.dispatch((dispatch, getState) => {
  //   // Call an API
  //   // When the promise is resolved => dispatch()
  //   dispatch({ type: "bugsReceived", bugs: [1, 2, 3] });
  //   console.log(
  //     "this is the getState from the store via the logger middleware: ",
  //     getState()
  //   );
  //   // If the promise is rejected => dispatch()
  // });

  store.dispatch({
    type: "error",
    // type: "idk",
    payload: { message: "An error occurred. Shit." },
  });

  // store.dispatch(userAdded({ name: "User 1", description: "Lorem etc" }));
  // store.dispatch(userAdded({ name: "User 2", description: "Lorem etc" }));
  // store.dispatch(userAdded({ name: "User 3", description: "Lorem etc" }));
  // store.dispatch(projectAdded({ name: "Project 1", description: "Lorem etc" }));
  // store.dispatch(bugAdded({ description: "Bug 1 description lorem ipsum" }));
  // store.dispatch(bugRemoved({ description: "Bug REMOVED" }));
  // store.dispatch(bugAdded({ description: "Bug 6666 description lorem ipsum" }));
  // store.dispatch(bugAdded({ description: "Bug  1212343245" }));
  // store.dispatch(bugAssignedToUser({ bugId: 2, userId: 3 }));
  // store.dispatch(bugResolved({ id: 3 }));
  // const unresolvedBugs = unresolvedBugsSelector(store.getState());
  // console.log("This is unresolvedBugs we made: ", unresolvedBugs);
  // const bugsByUser = bugsByUserSelector(3)(store.getState());
  // console.log("This is bugsByUser we made: ", bugsByUser);
  return <Layout />;
}
