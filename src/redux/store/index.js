import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import searchReducer from "../reducers/searchReducer";
const rootReducer = combineReducers({
  favourites: mainReducer,
  search: searchReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
