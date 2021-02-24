import userReducer from "./userReducer";
import colorsReducer from "./colorsReducer";

import { combineReducers } from "redux";
// @ts-ignore
const rootReducer = combineReducers({
  userReducer,
  colorsReducer
});

export default rootReducer;
