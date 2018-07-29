import config from "../config";

const middleware = [];

if (config.redux.enableLogger) {
  middleware.push(require("redux-logger").createLogger());
}

export default middleware;
