let lastScroll = 0;
let navbar = document.querySelector("nav");

window.onscroll = function() {
  let currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    navbar.classList.add("hide");
  } else {
    navbar.classList.remove("hide");
  }

  lastScroll = currentScroll;
};
