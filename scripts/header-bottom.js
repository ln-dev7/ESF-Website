const linkItems = document.querySelectorAll(".header-bottom-links .arrow");
linkItems.forEach((element) => {
  element.addEventListener("click", function (e) {
    for (let index = 0; index < linkItems.length; index++) {
      linkItems[index].classList.remove("active");
    }
    e.target.classList.toggle("active");
  });
});

window.onclick = function (e) {
  if (!e.target.matches(".header-bottom-links .arrow")) {
    linkItems.forEach(element => {
        if (element.classList.contains("active")) {
            element.classList.remove("active");
          }
    });
  }
}
