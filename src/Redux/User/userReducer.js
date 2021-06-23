import {
  USER_LOGIN_FAILED,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_FAILED,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
} from "./userTypesConstants";

export const userReducer = (
  initialState = {
    user: {
      _id: "",
      name: "",
      email: "",
      token: "",
    },
    success: false,
    isLoading: false,
    error: "",
  },
  action
) => {
  /**
      action={
            type:String,
            payload:
      }
     * */

  switch (action.type) {
    /** LOGIN cases */
    case USER_LOGIN_START:
      return {
        ...initialState,
        isLoading: true,
      };

    case USER_LOGIN_SUCCESS:
      return {
        user: action.payload,
        isLoading: false,
        success: true,
      };

    case USER_LOGIN_FAILED:
      return {
        ...initialState,
        error: action.payload,
        isLoading: false,
      };

    /** Register cases */
    case USER_REGISTER_START:
      return {
        ...initialState,
        isLoading: true,
      };

    case USER_REGISTER_SUCCESS:
      return {
        user: action.payload,
        isLoading: false,
        success: true,
      };

    case USER_REGISTER_FAILED:
      return {
        ...initialState,
        error: action.payload,
        isLoading: false,
      };

    /** Logout cases */
    case USER_LOGOUT_SUCCESS:
      return {
        user: {
          _id: "",
          name: "",
          email: "",
          token: "",
        },
      };

    default:
      return initialState;
  }
};
