import { ADS_FETCHED, fetchAds } from "../actions/ads";

export default function reducer(state = null, action = {}) {
  switch (action.type) {
    case ADS_FETCHED:
      return action.ads;
    default:
      return state;
  }
}
