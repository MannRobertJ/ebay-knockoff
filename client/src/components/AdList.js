import React from "react";
import { Link } from "react-router-dom";

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
          <li key={ad.id}>
            <Link to={`/${ad.id}`}>{ad.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
