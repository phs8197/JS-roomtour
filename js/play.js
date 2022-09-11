const playScreen = document.querySelector("#play-popup");
const playBtn = document.querySelector(".play-btn");
const closedPlay = document.querySelector("#play-closed");

function handlePopup() {
  playScreen.classList.remove("hidden");
  console.log("a");
}
console.log(playBtn);
playBtn.addEventListener("click", handlePopup);

function handleClosed() {
  playScreen.classList.add("hidden");
}
closedPlay.addEventListener("click", handleClosed);

const musicPlayBtn = document.querySelector("#music_play");
const musicPauseBtn = document.querySelector("#music_pause");
const myAudio = new Audio("src/music.mp3");
console.dir(myAudio);
function startMusic() {
  myAudio.play();
  musicPlayBtn.classList.add("hidden");
  musicPauseBtn.classList.remove("hidden");
}
musicPlayBtn.addEventListener("click", startMusic);

function pauseMusic() {
  myAudio.pause();
  musicPauseBtn.classList.add("hidden");
  musicPlayBtn.classList.remove("hidden");
}
musicPauseBtn.addEventListener("click", pauseMusic);

const progressBlack = document.querySelector(".progress_black");
const progressDot = document.querySelector(".progress_dot");
const currentTime = document.querySelector("#current-time");
const durationTime = document.querySelector("#duration-time");

function handleTrack() {
  const progressNow = `${(myAudio.currentTime * 100) / myAudio.duration}%`;
  const progressMin = `${Math.floor(myAudio.currentTime / 60)}`;
  const progressSec = `${Math.floor(myAudio.currentTime % 60)}`;
  const durationMin = `${Math.floor(myAudio.duration / 60)}`;
  const durationSec = `${Math.floor(myAudio.duration % 60)}`;
  progressBlack.style.width = progressNow;
  currentTime.innerText = `${String(progressMin).padStart(2, "0")} : ${String(
    progressSec
  ).padStart(2, "0")}`;
  durationTime.innerText = `${String(durationMin).padStart(2, "0")} : ${String(
    durationSec
  ).padStart(2, "0")}`;
}
setInterval(() => {
  handleTrack();
}, 100);
