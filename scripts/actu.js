const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

const slides = document.querySelectorAll(".actu-cards .card");

let move = 2;

let maxSlide = slides.length - 1;

arrowRight.addEventListener("click", function () {
  if (move === maxSlide) {
    move = 0;
  } else {
    move++;
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(${120 * (move)}px)`;
  });
});

arrowLeft.addEventListener("click", function () {
  if (move === 0) {
    move = maxSlide;
  } else {
    move--;
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${340 * (move)}px)`;
  });
});
