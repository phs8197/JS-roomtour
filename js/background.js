const colors = [
  "#ECE7D5",
  "#BDB5AA",
  "#D1CFC2",
  "#DDDED0",
  "#D1D9C2",
  "#BDBCA5",
  "#CEC195",
];
const body = document.querySelector("body");
console.dir(body.style);
const Color1 = colors[Math.floor(Math.random() * colors.length)];
const Color2 = colors[Math.floor(Math.random() * colors.length)];
body.style.background = `linear-gradient(90deg,${Color1},${Color2})`;
body.style.fillOpacity = "50%";
/*const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);*/
