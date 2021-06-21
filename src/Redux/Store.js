import { createStore, combineReducers } from "redux";
import { userReducer } from "./User/userReducer";

const reducers = combineReducers({
  userDetails: userReducer,
});

const store = createStore(reducers);

export default store;
