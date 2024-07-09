import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favoriteReducer from "../reducers/favoriteReducer";
import saveDataReducer from "../reducers/saveDataReducer";

const bigReducer = combineReducers({
  favorite: favoriteReducer,
  saveData: saveDataReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
