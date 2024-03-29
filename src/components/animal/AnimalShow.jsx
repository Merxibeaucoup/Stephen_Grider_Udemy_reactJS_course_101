import React from "react";
import { useState } from "react";
import Animal from "./Animal";

const AnimalShow = () => {
  const [animals, setAnimals] = useState([]);

  const generateRandomAnimal = () => {
    const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
    return animals[Math.floor(Math.random() * animals.length)];
  };

  const handleClick = () => {
    setAnimals([...animals, generateRandomAnimal()]);
  };

  return (
    <div className="animalShow">
      <button className="animalShow__button" onClick={handleClick}>
        Add Animal
      </button>

      <div className="animalShow__animal-list">
        {animals.map((animal, index) => {
          return <Animal type={animal} key={index} />;
        })}
      </div>
    </div>
  );
};

export default AnimalShow;
