import React from "react";
import "./tourDetails.css";

const tourDetails = props => {
  const children = `children ${props.children}`
  return (
    <div onClick={props.clicked} className="pop-detail col-6">
      <h4>{props.name}</h4>
      <img
        alt={props.name}
        src={props.image}
      />
      <p>adults {props.adults} {children}</p>
      <p>{props.date}</p>
      <p>{props.price} EGP</p>
    </div>
  );
};

export default tourDetails;
