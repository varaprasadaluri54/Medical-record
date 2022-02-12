import { combineReducers } from "redux";
import userReducer from "./userReducer";
import newReducer from "./newReducer";

export default combineReducers({ userReducer, newReducer });
