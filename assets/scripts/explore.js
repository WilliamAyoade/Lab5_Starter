// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const text = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const button = document.querySelector('button');
  const image = document.querySelector('img');

  const synth = window.speechSynthesis;
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    
    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    }
  }
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  
  button.addEventListener('click', () => {
    const sayThis = new SpeechSynthesisUtterance(text.value);
    const selectedname = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (const voice of voices) {
      if (voice.name === selectedname) {
        sayThis.voice = voice;
      }
    }
    sayThis.onstart = () => {
      image.src = 'assets/images/smiling-open.png';
    };
    sayThis.onend = () => {
      image.src = 'assets/images/smiling.png';
    };
    synth.speak(sayThis);
  });

}