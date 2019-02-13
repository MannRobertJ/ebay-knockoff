import { combineReducers } from "redux";
import ads from "./ads";
import ad from "./ad";
import login from "./login";

export default combineReducers({ ads, ad, login });
