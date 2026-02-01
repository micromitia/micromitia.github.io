const audio = document.getElementById("audio");
const button = document.getElementById("playButton");
const icon = document.getElementById("icon");

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    icon.textContent = "pause";
  } else {
    audio.pause();
    icon.textContent = "play_arrow";
  }
});

audio.addEventListener("ended", () => {
  icon.textContent = "play_arrow";
});
