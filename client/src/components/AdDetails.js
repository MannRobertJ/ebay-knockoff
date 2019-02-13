import React from "react";

export default function(props) {
  const ad = props.ad;
  if (!props.ad) return <p> loading... </p>;
  return (
    <ul>
      <li>title: {ad.title}</li>
      <li>description: {ad.description}</li>
    </ul>
  );
}
