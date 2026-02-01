const audio = document.getElementById("audio");
const playButton = document.getElementById("playButton");
const icon = document.getElementById("icon");

/* клік по обкладинці */
playButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

/* синхронізація зі стандартним плеєром */
audio.addEventListener("play", () => {
  icon.textContent = "pause";
});

audio.addEventListener("pause", () => {
  icon.textContent = "play_arrow";
});

audio.addEventListener("ended", () => {
  icon.textContent = "play_arrow";
});

/* прибити long-press / контекстне меню на Android */
playButton.addEventListener("contextmenu", e => {
  e.preventDefault();
});
