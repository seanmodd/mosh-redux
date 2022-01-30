const func =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === "function") {
      action(dispatch, getState);
    } else {
      console.log("Logging", action);
      next(action);
    }
  };

export default func;
