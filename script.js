const btnMobileNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnMobileNav.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});
