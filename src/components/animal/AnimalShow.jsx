import React from "react";
import { useState } from "react";

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

      <p>{animals}</p>
    </div>
  );
};

export default AnimalShow;
