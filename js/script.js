const burgerButton = document.querySelector(".burger-button");
const siteNav = document.querySelector(".site-nav");

burgerButton.addEventListener("click", function () {
  siteNav.classList.toggle("active");

  const menuIsOpen = siteNav.classList.contains("active");

  burgerButton.setAttribute("aria-expanded", menuIsOpen);

  console.log("Burger-menu klikket");
  console.log("Menu åben:", menuIsOpen);
  console.log("aria-expanded:", burgerButton.getAttribute("aria-expanded"));
});
