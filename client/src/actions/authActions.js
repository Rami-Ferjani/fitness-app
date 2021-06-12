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
  WORKOUT_LOADED,
} from "./types";

//check token and load user
export const loadUser = () => (dispatch, getState) => {
  //User loading
  dispatch({ type: USER_LOADING });

  axios
    .get("/api/auth/person", tokenConfig(getState))
    .then((res) => {
      axios.get(`/api/workout/${res.data.workoutref}`).then((response) => {
        console.log("i got here");
        dispatch({
          type: WORKOUT_LOADED,
          payload: response.data,
        });
      });
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      console.log(err);
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

//Register user
export const register =
  ({ name, email, password }) =>
  (dispatch) => {
    const config = {
      headers: {
        "content-Type": "application/json",
      },
    };

    //request body
    const body = JSON.stringify({ name, email, password });

    axios
      .post("/api/persons", body, config)
      .then((res) =>
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch(
          returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
        );
        dispatch({
          type: REGISTER_FAIL,
        });
      });
  };

//Login User
export const login =
  ({ email, password }) =>
  (dispatch) => {
    const config = {
      headers: {
        "content-Type": "application/json",
      },
    };
    //-request body
    const body = JSON.stringify({ email, password });

    axios
      .post("/api/auth", body, config)
      .then((res) => {
        const ref = res.data.person.workoutref;
        axios.get(`/api/workout/${ref}`).then((response) => {
          console.log(res.data);
          dispatch({
            type: WORKOUT_LOADED,
            payload: response.data,
          });
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
          });
        });
      })
      .catch((err) => {
        dispatch(
          returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
        );
        dispatch({
          type: LOGIN_FAIL,
        });
      });
  };

//Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
//setup config/headers and token
export const tokenConfig = (getState) => {
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
};
