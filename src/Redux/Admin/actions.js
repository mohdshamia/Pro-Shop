import axios from "axios";
import API_URL from "../../Api";
import {
  DELETE_USER_FAILED,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  GET_USERS_FAILED,
  GET_USERS_START,
  GET_USERS_SUCCESS,
  UPDATE_USER_FAILED,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
} from "./types";

export const getUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_USERS_START,
    });
    const state = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.userDetails.user.token}`,
      },
    };

    const response = await axios.get(`${API_URL}/users`, config);

    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      payload: e?.response?.data?.message,
      type: GET_USERS_FAILED,
    });
  }
};

export const handleDelete =
  (id = "") =>
  async (dispatch, getState) => {
    if (window.confirm("Are you sure")) {
      try {
        dispatch({
          type: DELETE_USER_START,
        });

        const state = getState();
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.userDetails.user.token}`,
          },
        };

        const response = await axios.delete(`${API_URL}/users/${id}`, config);

        const filteredUsers = state.admin.users.users.filter(
          (user) => user._id !== id
        );

        dispatch({
          type: DELETE_USER_SUCCESS,
          payload: response.data.message,
        });

        dispatch({
          type: GET_USERS_SUCCESS,
          payload: filteredUsers,
        });
      } catch (e) {
        dispatch({
          payload: e?.response?.data?.message,
          type: DELETE_USER_FAILED,
        });
      }
    }
  };

export const handleUserUpdate =
  (id = "", body) =>
  async (dispatch, getState) => {
    if (window.confirm("Are you sure")) {
      try {
        dispatch({
          type: UPDATE_USER_START,
        });

        const state = getState();
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.userDetails.user.token}`,
          },
        };

        const response = await axios.put(
          `${API_URL}/users/${id}`,
          body,
          config
        );

        dispatch({
          type: UPDATE_USER_SUCCESS,
          payload: response.data.message,
        });
      } catch (e) {
        dispatch({
          payload: e?.response?.data?.message,
          type: UPDATE_USER_FAILED,
        });
      }
    }
  };
