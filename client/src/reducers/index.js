import { combineReducers, combinerReducers } from "redux";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";


export default combineReducers({
  error: errorReducer,
  auth: authReducer,
});
