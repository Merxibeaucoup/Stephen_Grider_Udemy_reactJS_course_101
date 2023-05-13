import React from "react";
import bird from "/assets/svg/bird.svg";
import cat from "/assets/svg/cat.svg";
import cow from "/assets/svg/cow.svg";
import gator from "/assets/svg/gator.svg";
import heart from "/assets/svg/heart.svg";
import dog from "/assets/svg/dog.svg";
import horse from "/assets/svg/horse.svg";
import { useState } from "react";

const svgMap = {
  bird,
  cat,
  dog,
  cow,
  //   heart,
  horse,
  gator,
};

const Animal = ({ type }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal" onClick={handleClick}>
      <img className="animal__animal-img" src={svgMap[type]} alt="animal" />
      <img
        className="animal__animal-heart"
        src={heart}
        alt="heart"
        style={{
          width: 10 + 10 * clicks + "px",
        }}
      />
    </div>
  );
};

export default Animal;
