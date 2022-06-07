const linkItems = document.querySelectorAll(".header-bottom-links .arrow");

linkItems.forEach((element) => {
  element.addEventListener("click", function (e) {
    for (let index = 0; index < linkItems.length; index++) {
      if (linkItems[index] !== e.target) {
        linkItems[index].classList.remove("show");
      }
    }
    e.target.classList.toggle("show");
  });
})

window.onclick = function (e) {
  if (!e.target.matches(".header-bottom-links .arrow")) {
    linkItems.forEach(element => {
        if (element.classList.contains("show")) {
            element.classList.remove("show");
          }
    });
  }
}

const burger = document.querySelector(".header-bottom-burger");
const menuLinks = document.querySelector(".header-bottom-links");

burger.addEventListener("click", (e) => {
    e.preventDefault();
    menuLinks.classList.toggle("show-menu");
})