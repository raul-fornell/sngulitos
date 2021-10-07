const canvas = document.getElementById("avatar");
const ctx = canvas.getContext("2d");

export default function draw(images) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  images.reverse().forEach(image => {
    ctx.drawImage(image, 0, 0);    
  });
}
