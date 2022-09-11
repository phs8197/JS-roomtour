const popupClock = document.querySelector("#clock-popup");
const clockBtn = document.querySelector(".clock-btn");
const clock = document.querySelector("h2#clock");
const closedClock = document.querySelector("#clock-closed");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}h: ${minutes}m: ${seconds}s`;
}
getClock();
setInterval(getClock, 1000);

function handlePopup() {
  popupClock.classList.remove("hidden");
}

clockBtn.addEventListener("click", handlePopup);

function handleClosed() {
  popupClock.classList.add("hidden");
}
closedClock.addEventListener("click", handleClosed);
