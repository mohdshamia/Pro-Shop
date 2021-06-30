import axios from "axios";
import { PLACE_ORDER_START } from "./ordersTypesConstants";

export const placeOrder = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PLACE_ORDER_START,
    });

    const { data } = axios.post("");
  } catch (e) {}
};
