import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import workoutReducer from "./workoutReducer";

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  workout: workoutReducer,
});
