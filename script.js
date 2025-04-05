const button = document.getElementById('stepButton');
const content = document.getElementById('content');
const video = document.getElementById('scaryVideo');

let step = 1;

button.addEventListener('click', () => {
  if (step === 1) {
    button.textContent = 'READY';
    step++;
  } else if (step === 2) {
    button.textContent = 'You really want it huh!';
    step++;
  } else if (step === 3) {
    // Play jumpscare
    video.style.display = 'block';
    video.play();
    video.volume = 1;

    // Hide button
    button.style.display = 'none';

    // When video ends, show final message
    video.onended = () => {
      video.style.display = 'none';
      showFinalMessage();
    };
  }
});

function showFinalMessage() {
  const final = document.createElement('div');
  final.id = 'finalMessage';
  final.innerText = 'APRIL FOOL 2026';
  document.body.appendChild(final);
}
