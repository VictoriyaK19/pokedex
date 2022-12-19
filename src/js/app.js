import { data } from "autoprefixer";
import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=10';

  const ul = document.querySelector("ul");

  fetch(url)
  .then((response) => response.json())
  .then((data) => {

    let result = data.results;
    result.forEach(element => {


      let li = document.createElement("li");
      li.innerHTML = element.name;
      ul.appendChild(li);
      });
    
  });
});

