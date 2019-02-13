import { ADS_FETCHED } from "../actions/ads";
import { AD_UPDATE_SUCCESS } from "../actions/ad";

export default function reducer(state = null, action = {}) {
  switch (action.type) {
    case ADS_FETCHED:
      return action.ads;
    case AD_UPDATE_SUCCESS:
      return state.map(ad => (ad.id === action.id ? action.data : ad));
    default:
      return state;
  }
}
