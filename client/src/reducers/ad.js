import { AD_FETCHED, NO_AD, AD_UPDATE_SUCCESS } from "../actions/ad";

export default function reducer(state = null, action = {}) {
  switch (action.type) {
    case AD_FETCHED:
      return action.ad;
    case NO_AD:
      return action.ad;
    case AD_UPDATE_SUCCESS:
      console.log("reducer", action.data);
      return action.data;
    default:
      return state;
  }
}
