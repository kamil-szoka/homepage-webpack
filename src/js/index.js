import "../scss/main.scss";
import moment from "moment";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");
const name = "Kamil";
const siteName = "Koza Inc.";

console.log(
  `Witaj na ${siteName}! Mam na imię ${name} i będę Twoim przewodnikiem`
);

const inner = document.querySelector(".main__paragraph--js");
inner.innerHTML = `${siteName} wstawione za pomocą innerHTML w JavaScript`;
console.log(inner.innerHTML);

// ------------------FAT ARROW----------------------------
const greeting = (name, age) => {
  console.log(
    `Witaj na mojej stronie internetowej. Ja jestem ${name}, mam ${age} lat`
  );
};

greeting("Andrzej", 758);

const burger = document.querySelector(".hamburger");

const myClick = () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
  console.log("działa");
};
burger.addEventListener("click", myClick);

const startOfDay = moment().startOf("day").fromNow();
console.log(startOfDay);
