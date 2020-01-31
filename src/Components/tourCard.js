import React from "react";
import "./tourCard.css";

const tourCard = (props) => {

  const clickHandler = (name)=>{
    return name
  }
  return (
    <div className="pointer col-md-6 col-lg-4 text-center d-flex" onClick={props.clicked} >
      <img
        src={props.image}
        className="img-fluid pointer"
        alt="london_image"
        width="800"
        height="533"
       
      />
      <div className="w-50 position-absolute mt-5 mr-5 pr-5">
        <h4>{props.name}</h4>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

export default tourCard;
