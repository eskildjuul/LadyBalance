const burgerButton = document.querySelector(".burger-button");
const siteNav = document.querySelector(".site-nav");

burgerButton.addEventListener("click", function () {
  const menuIsOpen = siteNav.classList.toggle("active");

  burgerButton.setAttribute("aria-expanded", menuIsOpen);

  if (menuIsOpen) {
    burgerButton.setAttribute("aria-label", "Luk menu");
    console.log("Menuen er åbnet");
  } else {
    burgerButton.setAttribute("aria-label", "Åbn menu");
    console.log("Menuen er lukket");
  }
});