import {getRandomInt} from "./js/founction/founction.js";

const counter = document.querySelector(".counter");
const color = ["red", "blue", "green", "pink"];
const func = () => {
  setInterval(() => {
    let num = counter.textContent;
    num = Number(num) + 1;
    counter.textContent = num;

    counter.classList.forEach((className) => {
      if (className !== "counter") {
        counter.classList.remove(className);
      }
    });
    counter.classList.add(color[getRandomInt(0, 4)]);
  }, 1 *1000);

  const a = new Promise(() => {});
};
func();
