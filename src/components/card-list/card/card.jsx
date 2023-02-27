import React from "react";
import "./card-styles.css";

const Card = ({ monster : { name, email, id } }) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${id}?set=set2=150x150`} alt="monster" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
