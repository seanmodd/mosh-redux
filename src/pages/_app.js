import React from "react";
import "@/styles/globals.css";
import StoreContext from "src/contexts/storeContext";
import configureStore from "src/store/configureStore";

function MyApp({ Component, pageProps }) {
  const store = configureStore();
  return (
    <StoreContext.Provider value={store}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  );
}

export default MyApp;
