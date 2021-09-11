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

export const adminReducers = (
  initialState = {
    users: {
      users: [],
      success: "",
      isLoading: false,
      error: "",
    },
    deleteOrder: {
      success: "",
      isLoading: false,
      error: "",
    },
    updateUser: {
      success: "",
      isLoading: false,
      error: "",
    },
  },
  action
) => {
  switch (action.type) {
    case GET_USERS_START:
      return {
        ...initialState,
        users: {
          isLoading: true,
        },
      };
    case GET_USERS_SUCCESS:
      return {
        ...initialState,
        users: {
          isLoading: false,
          users: action.payload,
          success: true,
        },
      };
    case GET_USERS_FAILED:
      return {
        ...initialState,
        users: {
          isLoading: false,
          success: false,
          error: action.payload,
        },
      };

    /** Delete User Cases*/
    case DELETE_USER_START:
      return {
        ...initialState,
        deleteOrder: {
          isLoading: true,
        },
      };
    case DELETE_USER_SUCCESS:
      return {
        ...initialState,
        deleteOrder: {
          isLoading: false,
          success: action.payload,
        },
      };
    case DELETE_USER_FAILED:
      return {
        ...initialState,
        deleteOrder: {
          isLoading: false,
          success: false,
          error: action.payload,
        },
      };
    /** Update User Cases*/
    case UPDATE_USER_START:
      return {
        ...initialState,
        updateUser: {
          isLoading: true,
        },
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...initialState,
        updateUser: {
          isLoading: false,
          success: action.payload,
        },
      };
    case UPDATE_USER_FAILED:
      return {
        ...initialState,
        updateUser: {
          isLoading: false,
          success: false,
          error: action.payload,
        },
      };
    default:
      return initialState;
  }
};
