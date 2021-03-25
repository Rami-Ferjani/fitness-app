import { combineReducers, combinerReducers } from "redux";

import authReducer from "./authReducer";
export default combineReducers({
  auth: authReducer,
});
