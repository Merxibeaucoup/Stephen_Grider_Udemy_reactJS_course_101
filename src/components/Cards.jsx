import React from "react";
import cardData from "../data";
import Card from "./Card";
const Cards = () => {
  return (
    <div className="cards">
      {cardData.map((item) => {
        return <Card item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Cards;
