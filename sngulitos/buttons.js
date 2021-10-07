import { addEventListener, dispatchEvent } from "../inc/eventDispatcher.js";

function removeMouseDownStyle(button) {
  button.classList.remove("clicked");
}

function addMouseDownStyle(event) {
  const button = event.currentTarget;
  button.classList.add("clicked");
  setTimeout(() => removeMouseDownStyle(button), 50);
}

function showAll() {
  rowButtons.forEach(item => item.style.display = "block")
}

function hideAll() {
  rowButtons.forEach(item => item.style.display = "none")
}

const allButtons = document.querySelectorAll(".button");
const rowButtons = Array.from(document.querySelectorAll(".buttons .button"));

Array.from(allButtons).forEach((button) => {
  button.addEventListener("click", addMouseDownStyle);
});
document
  .querySelector("#prev")
  .addEventListener("click", () => dispatchEvent("onPrev"));
document
  .querySelector("#next")
  .addEventListener("click", () => dispatchEvent("onNext"));
document
  .querySelector("#reload")
  .addEventListener("click", () => dispatchEvent("onReload"));

export default {
  addEventListener,
  showAll,
  hideAll,
};
