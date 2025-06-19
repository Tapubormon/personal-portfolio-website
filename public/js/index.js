const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["developer", "Marketing expert"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) {
        cursorSpan.classList.add("typing");
    }
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) {
        cursorSpan.classList.add("typing");
    }
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, 250);
});


document.addEventListener("DOMContentLoaded", () => {
  function animateCircularProgressWhenVisible(progressEnd, progressId) {
    let circularProgressElement = document.getElementById(progressId);
    let circularProgressAlreadyAnimated = false;

    function animateCircularProgress() {
      if (!circularProgressAlreadyAnimated) {
        circularProgress(progressEnd, progressId);
        circularProgressAlreadyAnimated = true;
      }
    }

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCircularProgress();
          observer.unobserve(circularProgressElement);
        }
      });
    });

    observer.observe(circularProgressElement);
  }

  function circularProgress(end, progressId) {
    const circularProgress = document.querySelector(`#${progressId}`);
    const progressValue = circularProgress.querySelector(".progress-value");
    let progressStartValue = 0;
    const speed = 10;

    let progress = setInterval(() => {
      progressStartValue++;

      progressValue.textContent = `${progressStartValue}%`;
      circularProgress.style.background = `conic-gradient(#02c778 ${progressStartValue * 3.6}deg, #ededed 0deg)`;

      if (progressStartValue === end) {
        clearInterval(progress);
      }
    }, speed);
  }

  animateCircularProgressWhenVisible(90, "circular_progress_1");
  animateCircularProgressWhenVisible(80, "circular_progress_2");
  animateCircularProgressWhenVisible(85, "circular_progress_3");
  animateCircularProgressWhenVisible(90, "circular_progress_4");
});





//  Progress bar Animation
const animatedProgressbar = (targetWidth, progressbar) => {
  const Progressbar = document.querySelector(`.${progressbar}`)
  const percentange = Progressbar.querySelector('.percentage')
  
  let count = 1
  const timeout = 1300 / targetWidth
  const intervalId = setInterval(() => {
      Progressbar.style.width = `${targetWidth}%`
      percentange.innerHTML = count + '%'
      count++
      if (count > targetWidth) {
          clearInterval(intervalId)
      }
  }, timeout)
}

window.addEventListener('DOMContentLoaded', () => {
  animatedProgressbar(95, 'progressbar1')
  animatedProgressbar(97, 'progressbar2')
  animatedProgressbar(100, 'progressbar3')
  animatedProgressbar(100, 'progressbar4')
  animatedProgressbar(100, 'progressbar5')
})










