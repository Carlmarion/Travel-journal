import React from "react";

export default function Header() {
  return (
    <div className="header-wrapper">
      <img
        src={require("./world.png")}
        className="header-logo"
        alt="world"
      ></img>
      <h3>Travel Journal</h3>
    </div>
  );
}
