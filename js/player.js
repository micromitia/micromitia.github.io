const audio = document.getElementById('player');
const wrapper = document.getElementById('togglePlay');

wrapper.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    wrapper.classList.add('playing');
  } else {
    audio.pause();
    wrapper.classList.remove('playing');
  }
});

audio.addEventListener('ended', () => {
  wrapper.classList.remove('playing');
});
