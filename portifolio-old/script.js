const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  
  if (targetSection !== "#about" && targetSection !== "#contact") {
    card.classList.add("is-active");
  } else {
    card.classList.remove("is-active");
  }
  
  if (innerWidth <= 320) {
    if (targetSection !== "#about" && targetSection !== "#contact" && targetSection !== "#experience" && targetSection !== "#project") {
      card.classList.add("is-active");
    } else {
      card.classList.remove("is-active");
    }
  }

  sections.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));

  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});
