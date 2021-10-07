import { addEventListener, dispatchEvent } from "../inc/eventDispatcher.js";

const imageRoutes = ["imgs/hair/", "imgs/eyes/", "imgs/nose/", "imgs/mouths/", "imgs/extra/"];
const imageNames = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // Hair
  [0, 1, 2, 3, 4, 5, 6, 7],                   // Eyes
  [0, 1, 2, 3, 4, 5, 6, 7],                   // Nose
  [0, 1, 2, 3, 4, 5, 6, 7],                   // Mouths
  [0, 1, 2, 3],                               // Extra
];
const imageFiles = [];
let loaded = 0;
let pending = 0;
const head = new Image();

function preloadImagesForCanvas() {
  head.src = "imgs/head.png";
  imageNames.forEach((list, index) => {
    const loadedImages = list.map((name) => {
      const drawing = new Image();
      drawing.src = imageRoutes[index] + name + ".png";
      pending++;
      drawing.onload = () => {
        loaded++;
        dispatchEvent("onLoad", { loaded, pending });
      };
      return drawing;
    });
    imageFiles.push(loadedImages);
  });
}

preloadImagesForCanvas();

function getImagesFromSelection(selectedFeature) {
  const selectedImages = [];
  selectedFeature.forEach((key, index) => {
    const image = imageFiles[index][key];
    selectedImages.push(image);
  });
  selectedImages.push(head);
  return selectedImages;
}

function randomImageIndexes() {
  return imageNames.map(list => {
    return Math.floor(Math.random() * list.length);
  });
}

export default {
  imageNames,
  getImagesFromSelection,
  addEventListener,
  randomImageIndexes,
};
