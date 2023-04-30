import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={item.img} alt={item.img} />
      <h2>{item.title}</h2>
      <h5>{item.twitter}</h5>
      <p>{item.description}</p>
    </div>
  );
};

export default Card;
