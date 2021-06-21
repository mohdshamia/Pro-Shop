import { USER_LOGIN_SUCCESS } from "./userTypesConstants";

export const userReducer = (
  initialState = {
    user: {
      _id: "",
      name: "",
      email: "",
      token: "",
    },
  },
  action
) => {
  /**
     * action={
            type:String,
            payload:
     * }
     * */

  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        user: action.payload,
      };

    default:
      return initialState;
  }
};
