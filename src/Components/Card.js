import React, { useState } from "react";

export default function Card(props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="card-wrapper">
      <img className="card-image" src={props.item.imageUrl} alt=""></img>

      <div className="card-info-wrapper">
        <div className="card-location">
          <img src={require("./marker.png")} alt="" className="marker"></img>
          <h3 className="country">{props.item.location}</h3>
          <a href={props.item.googleMapsUrl} className="google-location">
            View on Google Maps
          </a>
        </div>

        <div className="card-title">
          <h1 className="title">{props.item.title}</h1>
        </div>

        <div className="card-content">
          <h3 className="card-date">
            {props.item.startDate}-{props.item.endDate}
          </h3>
          <p
            className={
              expanded ? "card-description-expanded" : "card-description"
            }
          >
            {props.item.description}
          </p>
          <div className="expander" onClick={() => setExpanded(!expanded)}>
            {expanded ? "show less" : "show more"}
          </div>
        </div>
      </div>
    </div>
  );
}
