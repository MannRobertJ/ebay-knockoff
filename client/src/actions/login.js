import request from "superagent";
import { baseUrl } from "./ads";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

export const login = data => dispatch => {
  request
    .post(`${baseUrl}/logins`)
    .send(data)
    .then(res => console.log(res.body));
};
