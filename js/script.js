// Make mobile navigation work:
const btnNavEl = document.querySelector(".navigation__mobile-btn");
const navEl = document.querySelector(".navigation");

btnNavEl.addEventListener("click", () => {
  navEl.classList.toggle("navigation__open");
});
