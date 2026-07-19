
    const setupEl = document.getElementById('setup');
    const punchlineEl = document.getElementById('punchline');
    const categoryEl = document.getElementById('category');
    const buttonEl = document.getElementById('joke-btn');
    const exitBtn = document.getElementById('exit-btn');
    const otterSvg = document.querySelector('.otter-svg');
    const otterMouth = document.getElementById('otter-mouth');

    const SMILING_MOUTH = "M 115 120 Q 125 130 135 120";
    const OPEN_MOUTH = "M 115 120 Q 125 145 135 120 F Z";

    // Tracks if a joke has been retrieved yet
    let hasAskedOnce = false;

    async function fetchNewJoke() {
      otterSvg.classList.remove('otter-idle');
      otterSvg.classList.add('otter-laughing');
      otterMouth.setAttribute('d', OPEN_MOUTH);
      otterMouth.setAttribute('fill', '#ef70d9');

      punchlineEl.classList.remove('revealed');
      buttonEl.disabled = true;
      buttonEl.textContent = "Squeaking a joke...";

      try {
        const res = await fetch('/api/jokes/random');
        const joke = await res.json();

        setTimeout(() => {
          categoryEl.textContent = `Category: ${joke.category}`;
          setupEl.textContent = joke.setup;
          otterMouth.setAttribute('d', "M 115 120 Q 125 135 135 120");
        }, 300);

        setTimeout(() => {
          punchlineEl.textContent = joke.punchline;
          punchlineEl.classList.add('revealed');
          
          otterMouth.setAttribute('d', SMILING_MOUTH);
          otterMouth.removeAttribute('fill');
          
          hasAskedOnce = true;
          buttonEl.disabled = false;
          buttonEl.textContent = "Now Tell ME. Anotter Joke";
        }, 1800);

      } catch (err) {
        console.warn("API server down, loading offline fallback joke.", err);
        setTimeout(() => {
          categoryEl.textContent = "Offline Mode";
          setupEl.textContent = "Why did the otter cross the road?";
          punchlineEl.textContent = "To get to the otter side.";
          punchlineEl.classList.add('revealed');
          
          otterMouth.setAttribute('d', SMILING_MOUTH);
          otterMouth.removeAttribute('fill');
          
          hasAskedOnce = true;
          buttonEl.disabled = false;
          buttonEl.textContent = "Now Tell ME. Anotter Joke";
        }, 1000);
      }
    }

    buttonEl.addEventListener('click', fetchNewJoke);

    // Navigation fallback logic for the custom EXIT action
    exitBtn.addEventListener('click', () => {
      if (document.referrer) {
        window.location.href = document.referrer;
      } else {
        window.location.href = "https://hiretamara.com";
      }
    });

    // Toggle animations seamlessly
    otterSvg.addEventListener('animationend', (e) => {
      if (e.animationName === 'otterLaugh') {
        otterSvg.classList.remove('otter-laughing');
        otterSvg.classList.add('otter-idle');
      }
    });
