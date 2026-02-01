const audio = document.getElementById("audio");
const button = document.getElementById("playButton");
const icon = document.getElementById("icon");

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    icon.classList.add("pause");
  } else {
    audio.pause();
    icon.classList.remove("pause");
  }
});

audio.addEventListener("ended", () => {
  icon.classList.remove("pause");
});
