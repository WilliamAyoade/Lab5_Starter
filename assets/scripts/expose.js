// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose > img');
  const audio = document.querySelector('audio');
  const volSlider = document.getElementById('volume');
  const volIcon = document.querySelector('#volume-controls > img');
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti()

  hornSelect.addEventListener('change', () => {
    const selectedHorn = hornSelect.value;
    if (selectedHorn === 'air-horn') {
      hornImage.src = 'assets/images/air-horn.svg';
      hornImage.alt = 'air horn';
      audio.src = 'assets/audio/air-horn.mp3';
    } else if (selectedHorn === 'car-horn') {
      hornImage.src = 'assets/images/car-horn.svg';
      hornImage.alt = 'car horn';
      audio.src = 'assets/audio/car-horn.mp3';
    } else if (selectedHorn === 'party-horn') {
      hornImage.src = 'assets/images/party-horn.svg';
      hornImage.alt = 'party horn';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  });
  volSlider.addEventListener('input', () => {
    const volume = Number(volSlider.value);
    audio.volume = volume / 100;
    if (volume === 0) {
      volIcon.src = 'assets/icons/volume-level-0.svg';
      volIcon.alt = 'volume level 0';
    } else if (volume < 33) {
      volIcon.src = 'assets/icons/volume-level-1.svg';
      volIcon.alt = 'volume level 1';
    } else if (volume < 67) {
      volIcon.src = 'assets/icons/volume-level-2.svg';
      volIcon.alt = 'volume level 2';
    } else {
      volIcon.src = 'assets/icons/volume-level-3.svg';
      volIcon.alt = 'volume level 3';
    }
  });
  playButton.addEventListener('click', () => {
    audio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });

}