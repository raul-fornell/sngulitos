const loadingText = document.querySelector("#loading");

function set(content) {
  loadingText.textContent = content;
}

function empty() {
  loadingText.textContent = "";
}

function hide() {
  loadingText.style.display = "none"
}

export default {
  set,
  empty,
  hide,
};