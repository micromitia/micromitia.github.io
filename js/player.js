const audio = document.getElementById("audio");
const playButton = document.getElementById("playButton");
const icon = document.getElementById("icon");

// клік по картинці
playButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

// коли аудіо реально стартує
audio.addEventListener("play", () => {
  icon.textContent = "pause";
});

// коли аудіо реально зупиняється
audio.addEventListener("pause", () => {
  icon.textContent = "play_arrow";
});

// коли трек дограв до кінця
audio.addEventListener("ended", () => {
  icon.textContent = "play_arrow";
});
