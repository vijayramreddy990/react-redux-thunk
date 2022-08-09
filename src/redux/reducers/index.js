import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

export const reducer = combineReducers({
  allProducts: productReducer,
});
