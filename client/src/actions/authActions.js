import axios from "axios";
import { returnErrors } from "./errorActions";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./types";

//check token and load user
export const loadUser = () => (dispatch, getState) => {
  //User loading
  dispatch({ type: USER_LOADING });

 
  axios
    .get("/api/auth/person", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

//setup config/headers and token
export const tokenConfig=getState=>{
     //Get token from localstorage
  //this will look inside ../reducers/authReducer  in initial state
  const token = getState().auth.token;

  //headers
  const config = {
    headers: {
      "content-type": "application/json",
    },
  };

  //if token,add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
}