import React from "react";
import { useState } from "react";

const AnimalShow = () => {
  const [number, setNumber] = useState(0);

  return (
    <div className="animalShow">
      <button
        className="animalShow__button"
        onClick={() => setNumber(number + 1)}
      >
        Add Animal
      </button>

      <p className="animalShow__number">Animals to show : {number}</p>
    </div>
  );
};

export default AnimalShow;
