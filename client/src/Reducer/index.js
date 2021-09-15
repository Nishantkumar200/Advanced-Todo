import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { UserReducer } from "./userReducer";

export default combineReducers({
  login: UserReducer,
  todo: todoReducer,
});
