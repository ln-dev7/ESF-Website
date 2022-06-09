const slideOne = document.querySelector(".home-slide-1");
const slideTwo = document.querySelector(".home-slide-2");
const slideThree = document.querySelector(".home-slide-3");

const contentOne = document.querySelector(".home-content-1");
const contentTwo = document.querySelector(".home-content-2");
const contentThree = document.querySelector(".home-content-3");

const bg = document.querySelector(".home-bg");

slideOne.addEventListener("click", function (e) {
  slideOne.classList.add("active");
  slideTwo.classList.remove("active");
  slideThree.classList.remove("active");

  contentOne.style.transform = "translateX(100%)";
  contentTwo.style.transform = "translateX(100%)";
  contentThree.style.transform = "translateX(100%)";
});

slideTwo.addEventListener("click", function (e) {
  slideOne.classList.remove("active");
  slideTwo.classList.add("active");
  slideThree.classList.remove("active");

  contentOne.style.transform = "translateX(-100%)";
  contentTwo.style.transform = "translateX(0)";
  contentThree.style.transform = "translateX(100%)";
});

slideThree.addEventListener("click", function (e) {
  slideOne.classList.remove("active");
  slideTwo.classList.remove("active");
  slideThree.classList.add("active");

  contentOne.style.transform = "translateX(-100%)";
  contentTwo.style.transform = "translateX(-100%)";
  contentThree.style.transform = "translateX(-100%)";
});
