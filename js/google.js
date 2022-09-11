const google = document.querySelector("#google-popup");
const googleBtn = document.querySelector(".google-btn");
const closedGoogle = document.querySelector("#google-closed");

function handlePopup() {
  google.classList.remove("hidden");
}

googleBtn.addEventListener("click", handlePopup);

function handleClosed() {
  google.classList.add("hidden");
}
closedGoogle.addEventListener("click", handleClosed);
