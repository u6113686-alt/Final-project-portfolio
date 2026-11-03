document.addEventListener("DOMContentLoaded", function () {
  const yearButtons = document.querySelectorAll(".year");
  const infoCard = document.querySelector(".progress-info");
  const infoYear = document.querySelector(".info-year");
  const infoDescription = document.querySelector(".info-description");

  function updateProgressCard(button) {
    const year = button.dataset.year;
    const info = button.dataset.info;

    // Canviar el contingut de la targeta
    infoYear.textContent = year;
    infoDescription.textContent = info;

    // Situar la targeta al lloc de l'any
    const x = button.offsetLeft + button.offsetWidth / 2;
    const y = button.offsetTop + button.offsetHeight / 2;

    infoCard.style.left = x + "px";
    infoCard.style.top = y + "px";

    // Mostrar la targeta
    infoCard.classList.add("visible");
  }

  yearButtons.forEach(function (button) {
    button.addEventListener("mouseenter", function () {
      updateProgressCard(button);
    });

    button.addEventListener("click", function () {
      updateProgressCard(button);
    });
  });
});
// Always start at the top of the page
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
