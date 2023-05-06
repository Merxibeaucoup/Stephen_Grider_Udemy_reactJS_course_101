import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimalShow from "./components/animal/AnimalShow";
import Cards from "./components/Cards";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<Cards />} />
          <Route path="animalShow" element={<AnimalShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
