import { LOGIN_SUCCESS } from "../actions/login";

export default function(state = "", action = {}) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log(action.jwt);
      return action.jwt;
    default:
      return state;
  }
}
