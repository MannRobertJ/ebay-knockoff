import request from "superagent";

export const baseUrl = "http://localhost:4000";

export const ADS_FETCHED = "ADS_FETCHED";

const adsFetched = ads => {
  return {
    type: ADS_FETCHED,
    ads
  };
};

export const fetchAds = () => dispatch => {
  request("GET", `${baseUrl}/ads`)
    .then(res => dispatch(adsFetched(res.body.ads)))
    .catch(console.error);
};

export const AD_CREATED = "AD_CREATED";

const adCreated = ad => {
  console.log(ad);
  return {
    type: AD_CREATED,
    ad
  };
};
export const createAd = data => dispatch => {
  request
    .post(`${baseUrl}/ads`)
    .send(data)
    .then(res => dispatch(adCreated(res.body)));
};
