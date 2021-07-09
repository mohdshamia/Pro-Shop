import {
  GET_FEATURED_PRODUCTS_FAILED,
  GET_FEATURED_PRODUCTS_START,
  GET_FEATURED_PRODUCTS_SUCCESS,
  GET_PRODUCT_BY_ID_FAILED,
  GET_PRODUCT_BY_ID_START,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_SLIDER_IMAGES_FAILED,
  GET_SLIDER_IMAGES_START,
  GET_SLIDER_IMAGES_SUCCESS,
} from "./guestTypes";
import axios from "axios";
import API_URL from "../../Api";

export const getSliderImages = () => async (dispatch) => {
  dispatch({
    type: GET_SLIDER_IMAGES_START,
  });

  try {
    const response = await axios.get(`${API_URL}/products/top`);

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
    const response = await axios.get(`${API_URL}/products`);

    dispatch({
      type: GET_FEATURED_PRODUCTS_SUCCESS,
      payload: response.data.products,
    });
  } catch (e) {
    dispatch({
      type: GET_FEATURED_PRODUCTS_FAILED,
      payload: e?.response?.message,
    });
  }
};

export const getProduct = (id) => async (dispatch) => {
  dispatch({
    type: GET_PRODUCT_BY_ID_START,
  });

  try {
    const response = await axios.get(`${API_URL}/products/${id}`);

    dispatch({
      type: GET_PRODUCT_BY_ID_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_PRODUCT_BY_ID_FAILED,
      payload: e?.response?.message,
    });
  }
};
