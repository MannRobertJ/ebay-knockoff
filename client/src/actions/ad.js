import request from "superagent";

import { baseUrl } from "./ads";

export const AD_FETCHED = "AD_FETCHED";

const adFetched = ad => {
  return {
    type: AD_FETCHED,
    ad
  };
};

export const fetchAd = id => dispatch => {
  request("GET", `${baseUrl}/ads/${id}`).then(res =>
    dispatch(adFetched(res.body.ad))
  );
};

export const NO_AD = "NO_AD";

const noAdAction = () => {
  return {
    type: NO_AD,
    ad: null
  };
};

export const noAd = () => dispatch => {
  dispatch(noAdAction());
};

export const AD_UPDATE_SUCCESS = "AD_UPDATE_SUCCESS";

const adUpdated = (id, data) => {
  return {
    type: AD_UPDATE_SUCCESS,
    data,
    id
  };
};

export const updateAd = (id, data) => dispatch => {
  console.log("does this work?");
  request
    .put(`${baseUrl}/ads/${id}`)
    .send(data)
    .then(response => dispatch(adUpdated(id, response.body)));
};
