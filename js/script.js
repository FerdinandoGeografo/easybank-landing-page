// Make mobile navigation work:
const btnNavEl = document.querySelector(".navigation__mobile-btn");
const navEl = document.querySelector(".navigation");
const heroEl = document.querySelector(".hero");

btnNavEl.addEventListener("click", () => {
  navEl.classList.toggle("navigation__open");
  heroEl.classList.toggle("hero--mask");
});
