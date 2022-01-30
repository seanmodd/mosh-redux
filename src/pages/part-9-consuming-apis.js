import Layout from "src/components/Layout";
import configureStore from "src/store/configureStore";
import * as actions from "src/store/api";

export default function Home() {
  const store = configureStore();
  store.dispatch(
    actions.apiCallBegan({
      url: "/bugs",
      onSuccess: "bugsReceived",
      // onSuccess: actions.apiCallSuccess.type,
      // onError: actions.apiCallFailed.type,
    })
  );

  return <Layout />;
}
