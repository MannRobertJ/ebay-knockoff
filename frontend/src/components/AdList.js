import React from "react";

export default function(props) {
  return (
    <div>
      {" "}
      <h1>Ads</h1>
      <ul>
        {props.ads.map(ad => (
          <li key={ad}>{ad}</li>
        ))}
      </ul>
    </div>
  );
}
