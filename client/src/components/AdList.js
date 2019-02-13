import React from "react";

export default function(props) {
  if (!props.ads) {
    return <p>loading...</p>;
  }

  return (
    <div>
      {" "}
      <h1>Ads</h1>
      <ul>
        {props.ads.map(ad => (
          <li key={ad.id}>{ad.title}</li>
        ))}
      </ul>
    </div>
  );
}
