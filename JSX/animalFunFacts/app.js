import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";

function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const randomIndex = Math.floor(Math.random() * animalInfo.facts.length);
  const funFact = animalInfo.facts[randomIndex];
  document.getElementById("fact").innerHTML = funFact;
}
const showBackground = false;
const title = "";
const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);
const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      onClick={displayFact}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
    />
  );
}
const animalFacts = (
  <div>
    <p id="fact"></p>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    {showBackground && background}
    <div className="animals">{images}</div>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById("root"));
