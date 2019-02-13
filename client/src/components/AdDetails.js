import React from "react";

export default function(props) {
  const ad = props.ad;

  return (
    <div>
      <ul>
        <li>title: {ad.title}</li>
        <li>description: {ad.description}</li>
      </ul>
      <img src={ad.pictureUrl} alt={ad.title} />
    </div>
  );
}
