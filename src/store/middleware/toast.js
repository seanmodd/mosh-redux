const toast = (store) => (next) => (action) => {
  if (action.type === "error")
    console.log(
      "Toastify here is the action.payload for the Error: ",
      action.payload
    );
  else next(action);
};

export default toast;
