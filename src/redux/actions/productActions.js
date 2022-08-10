import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constants/action-types";

// export const fetchProducts = () => {
//   return async function (dispatch, getState) {
//     const response = await fakeStoreApi.get("/products");
//     dispatch({
//       type: ActionTypes.FETCH_PRODUCTS,
//       payload: response.data,
//     });
//   };
// };

export const fetchProducts = () => async (dispatch, getState) => {
  const response = await fakeStoreApi.get("/products");
  dispatch({
    type: ActionTypes.FETCH_PRODUCTS,
    payload: response.data,
  });
};

export const fetchProduct = (productId) => async (dispatch, getState) => {
  const response = await fakeStoreApi.get(`products/${productId}`);
  dispatch({
    type: ActionTypes.SELECTED_PRODUCT,
    payload: response.data,
  });
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};
