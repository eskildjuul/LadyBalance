
const burgerButton = document.querySelector(".burger-button");
const siteNav = document.querySelector(".site-nav");

console.log("JS virker");
console.log(burgerButton);
console.log(siteNav);

burgerButton.addEventListener("click", function () {
  console.log("Burger er klikket");

  siteNav.classList.toggle("active");

  console.log(siteNav.classList);
});


