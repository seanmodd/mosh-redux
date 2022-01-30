import Layout from "src/components/Layout";
import configureStore from "src/store/configureStore";

export default function Home() {
  const store = configureStore();

  store.dispatch({
    type: "apiCallBegan",
    payload: {
      url: "/bugs",
      method: "get",
      data: {},
      onSuccess: "bugsReceived",
      onError: "apiRequestFailed",
    },
  });

  return <Layout />;
}
