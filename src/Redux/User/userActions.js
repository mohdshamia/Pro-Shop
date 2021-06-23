import {
  USER_LOGIN_FAILED,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_FAILED,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
} from "./userTypesConstants";
import axios from "axios";

export const loginAction = (values, history) => {
  return async (dispatch) => {
    dispatch({
      type: USER_LOGIN_START,
    });

    try {
      const response = await axios.post("/users/login", values);
      console.log(response);

      // Set user to localStorage
      localStorage.setItem("user", JSON.stringify(response.data));

      dispatch({
        payload: response.data,
        type: USER_LOGIN_SUCCESS,
      });

      history.push("/");
    } catch (e) {
      console.log(e.response);
      dispatch({
        payload: e.response.data.message,
        type: USER_LOGIN_FAILED,
      });
    }
  };
};

export const registerAction = (values, history) => {
  return async (dispatch) => {
    dispatch({
      type: USER_REGISTER_START,
    });

    try {
      const response = await axios.post("/users", values);

      // Set user to localStorage
      localStorage.setItem("user", JSON.stringify(response.data));

      dispatch({
        payload: response.data,
        type: USER_REGISTER_SUCCESS,
      });

      history.push("/");
    } catch (e) {
      console.log(e.response);
      dispatch({
        payload: e.response.data.message,
        type: USER_REGISTER_FAILED,
      });
    }
  };
};

export const logoutAction = () => {
  return {
    payload: null,
    type: USER_LOGOUT_SUCCESS,
  };
};
