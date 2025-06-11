const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const headerEl = document.querySelector(".header");
const btnMobileNav = document.querySelector(".btn-mobile-nav");

btnMobileNav.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

document.querySelector(".main-nav-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("main-nav-link")) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    const targetSection = document.querySelector(id);
    const headerHeight = getHeaderHeight();

    window.scrollTo({
      top:
        targetSection.getBoundingClientRect().top +
        window.scrollY -
        headerHeight,
      behavior: "smooth",
    });
  }

  if (
    e.target.classList.contains("main-nav-link") &&
    headerEl.classList.contains("nav-open")
  ) {
    headerEl.classList.remove("nav-open");
  }
});

document.querySelector(".footer-logo").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const sectionHeroEl = document.querySelector(".section-hero");

function getHeaderHeight() {
  return headerEl.offsetHeight;
}

const stickyNav = function ([entry]) {
  headerEl.classList.toggle("sticky", !entry.isIntersecting);
};
const headerHeight = getHeaderHeight();
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight + 80}px`,
});
if (sectionHeroEl) headerObserver.observe(sectionHeroEl);
