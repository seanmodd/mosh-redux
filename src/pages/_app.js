import React from "react";
import "@/styles/globals.css";
import configureStore from "src/store/configureStore";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
