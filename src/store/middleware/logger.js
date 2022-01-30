// we are currying logger = (store, next, action) to turn it into below:
const logger = (param) => (store) => (next) => (action) => {
  console.log("Logging", param);
  next(action);
};
export default logger;
