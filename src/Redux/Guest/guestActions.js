import {
  GET_FEATURED_PRODUCTS_FAILED,
  GET_FEATURED_PRODUCTS_START,
  GET_FEATURED_PRODUCTS_SUCCESS,
  GET_SLIDER_IMAGES_FAILED,
  GET_SLIDER_IMAGES_START,
  GET_SLIDER_IMAGES_SUCCESS,
} from "./guestTypes";
import axios from "axios";

export const getSliderImages = () => async (dispatch) => {
  dispatch({
    type: GET_SLIDER_IMAGES_START,
  });

  try {
    const response = await axios.get("/products/top");

    dispatch({
      type: GET_SLIDER_IMAGES_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_SLIDER_IMAGES_FAILED,
      payload: e?.response?.message,
    });
  }
};

export const getFeaturedProducts = () => async (dispatch) => {
  dispatch({
    type: GET_FEATURED_PRODUCTS_START,
  });

  try {
    const response = await axios.get("/products");

    dispatch({
      type: GET_FEATURED_PRODUCTS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_FEATURED_PRODUCTS_FAILED,
      payload: e?.response?.message,
    });
  }
};
