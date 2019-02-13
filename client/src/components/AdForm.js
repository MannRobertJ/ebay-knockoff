import React from "react";

export default function(props) {
  const ad = props.ad;
  return (
    <div>
      <form id="adForm" onSubmit={props.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="type title here"
          value={ad.title}
          onChange={props.onChange}
        />
        <input
          type="text"
          name="price"
          placeholder="type price here"
          value={ad.price || ""}
          onChange={props.onChange}
        />
        <input
          type="text"
          name="pictureUrl"
          placeholder="type picture url here"
          value={ad.pictureUrl || ""}
          onChange={props.onChange}
        />
        <input
          type="checkbox"
          name="soldStatus"
          value={ad.soldStatus || false}
          onChange={props.onChange}
        />
        Item has been sold
        <br />
      </form>
      <button type="submit" form="adForm" value="Submit">
        {" "}
        Submit
      </button>
    </div>
  );
}
