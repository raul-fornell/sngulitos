const avatar = document.getElementById("avatar");
const downloadLink = document.querySelector("#download");

function refresh() {
  const downloadURL = avatar.toDataURL();
  downloadLink.href = downloadURL;
}

export default {
  refresh
}