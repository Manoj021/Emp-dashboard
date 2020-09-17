import React from "react";
import "./EmpNameCard.css";
import avatar from "./avatar.png";
const EmpNameCard = () => {
  return (
    <div className="GridContainer">
      <img className="grid-image" src={avatar} alt="profile pic"></img>
      <span className="grid-item-1">M Manoj</span>
      <div className="grid-item-2">
        <p>Uid : 00012</p>
        <p>Role: Developer</p>
      </div>
    </div>
  );
};
export default EmpNameCard;
