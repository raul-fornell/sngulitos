import draw from "./sngulitos/draw.js";
import images from "./sngulitos/images.js";
import tabs from "./sngulitos/tabs.js";
import buttons from "./sngulitos/buttons.js";
import loadingText from "./sngulitos/loadingText.js";
import downloadLink from "./sngulitos/downloadLink.js";

let selectedFeatures;
let currentFeature = 0;
let currentColumn = 0;

function updateFeatures() {
  selectedFeatures[currentFeature] =
    images.imageNames[currentFeature][currentColumn];
  const selectedImages = images.getImagesFromSelection(selectedFeatures);
  draw(selectedImages);
  downloadLink.refresh();
}

function setPrevFeature() {
  currentColumn -= 1;
  if (currentColumn < 0) {
    currentColumn = images.imageNames[currentFeature].length - 1;
  }
  updateFeatures();
}

function setNextFeature() {
  currentColumn += 1;
  if (images.imageNames[currentFeature].length === currentColumn) {
    currentColumn = 0;
  }
  updateFeatures();
}

function randomize() {
  selectedFeatures = images.randomImageIndexes();
  currentColumn = selectedFeatures[currentFeature];
  updateFeatures();
}

function loadEnd() {
  setTimeout(() => (loadingText.set("All loaded!")), 1500);
  setTimeout(() => (loadingText.empty()), 3000);
  setTimeout(() => (buttons.showAll()), 3000);
  setTimeout(() => (loadingText.hide()), 3000);
  updateFeatures();
}

tabs.addEventListener("onTabChange", (data) => {
  currentFeature = data.index;
  currentColumn = selectedFeatures[currentFeature];
});

buttons.addEventListener("onPrev", setPrevFeature);
buttons.addEventListener("onNext", setNextFeature);
buttons.addEventListener("onReload", randomize);
buttons.hideAll();

images.addEventListener("onLoad", (data) => {
  loadingText.set(`Loaded ${data.loaded} of ${data.pending}`);
  const allLoaded = data.loaded === data.pending;
  if (allLoaded) {
    loadEnd();
  }
});

randomize();
tabs.setCurrentTab(0);
