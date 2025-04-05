const messages = [
    "You are truly amazing.",
    "Wishing you a day filled with love, laughter, and cake!",
    "May all your dreams come true.",
    "Let's make this moment unforgettable!"
  ];
  
  let step = 0;
  
  function startCelebration() {
    const messageBox = document.getElementById('messageBox');
    const iconBox = document.getElementById('iconBox');
    const audio = document.getElementById('birthdayAudio');
    const button = document.querySelector('button');
  
    button.style.display = 'none';
    audio.play();
  
    messageBox.innerText = messages[step];
    step++;
  
    const interval = setInterval(() => {
      if (step < messages.length) {
        messageBox.innerText = messages[step];
        step++;
      } else {
        clearInterval(interval);
        iconBox.style.display = 'block';
      }
    }, 2500);
  }