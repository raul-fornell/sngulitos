import { addEventListener, dispatchEvent } from "../inc/eventDispatcher.js";

function onTabClick(event) {
  const tab = event.target;
  const isTab = tab.classList.contains("tab");
  const index = Array.from(tab.parentElement.children).indexOf(tab);
  isTab && setCurrentTab(index);
}

const tabs = document.querySelector("#tabs");
tabs.addEventListener("click", onTabClick);

function setCurrentTab(index) {
  for (const tab of tabs.children) {
    tab.classList.remove("selected");
  }
  const selectedTab = Array.from(tabs.children)[index];
  selectedTab.classList.add("selected");
  dispatchEvent("onTabChange", { index });
}

export default {
  addEventListener,
  setCurrentTab,
};
