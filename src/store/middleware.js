import config from "../config";
import thunk from "redux-thunk";

const middleware = [thunk];

if (config.redux.enableLogger) {
  middleware.push(require("redux-logger").createLogger());
}

export default middleware;
