import {
  GET_ORDERS_FAILED,
  GET_ORDERS_START,
  GET_ORDERS_SUCCESS,
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
    userOrders: {
      success: false,
      isLoading: false,
      error: "",
      orders: [],
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
          success: false,
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

    case GET_ORDERS_START:
      return {
        ...initialState,
        userOrders: {
          success: false,
          isLoading: true,
          error: "",
          orders: [],
        },
      };

    case GET_ORDERS_SUCCESS:
      return {
        ...initialState,
        userOrders: {
          success: true,
          isLoading: false,
          error: false,
          orders: action.payload,
        },
      };

    case GET_ORDERS_FAILED:
      return {
        ...initialState,
        userOrders: {
          success: false,
          isLoading: false,
          error: action.payload,
          orders: [],
        },
      };

    default:
      return initialState;
  }
};
