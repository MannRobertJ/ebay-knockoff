import request from "superagent";
import { baseUrl } from "./ads";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const loginSuccess = jwt => {
  return {
    type: LOGIN_SUCCESS,
    jwt
  };
};

export const login = data => dispatch => {
  request
    .post(`${baseUrl}/logins`)
    .send(data)
    .then(res => dispatch(loginSuccess(res.body)));
};
