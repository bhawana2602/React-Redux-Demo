import { combineReducers } from "redux";
import user from "./userReducer";

// to combine all reducers together
const appReducer = combineReducers({
  user,
});

export default appReducer;
