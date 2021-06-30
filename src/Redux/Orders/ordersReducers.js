import {
  PLACE_ORDER_FAILED,
  PLACE_ORDER_START,
  PLACE_ORDER_SUCCESS,
} from "./ordersTypesConstants";

export const ordersReducers = (
  initialState = {
    placeOrder: {
      success: "",
      isLoading: false,
      error: "",
    },
  },
  action
) => {
  switch (action.type) {
    case PLACE_ORDER_START:
      return {
        ...initialState,
        placeOrder: {
          isLoading: true,
        },
      };

    case PLACE_ORDER_SUCCESS:
      return {
        ...initialState,
        placeOrder: {
          isLoading: false,
          success: action.payload,
        },
      };

    case PLACE_ORDER_FAILED:
      return {
        ...initialState,
        placeOrder: {
          isLoading: false,
          error: action.payload,
        },
      };

    default:
      return initialState;
  }
};
