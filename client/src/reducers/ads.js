import { ADS_FETCHED, AD_CREATED } from "../actions/ads";
import { AD_UPDATE_SUCCESS } from "../actions/ad";

export default function reducer(state = null, action = {}) {
  switch (action.type) {
    case ADS_FETCHED:
      return action.ads;
    case AD_UPDATE_SUCCESS:
      return state.map(ad => (ad.id === action.id ? action.data : ad));
    case AD_CREATED:
      return [...state, action.ad];
    default:
      return state;
  }
}
