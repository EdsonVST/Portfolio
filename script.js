document.addEventListener("DOMContentLoaded", () => {

  /* ===== ELEMENTOS ===== */
  const carousel = document.getElementById("projectsCarousel");
  const btnPrev = document.getElementById("prevProject");
  const btnNext = document.getElementById("nextProject");
  const projectCards = document.querySelectorAll(".project-card");

  const filterToggle = document.getElementById("filterToggle");
  const filterDropdown = document.getElementById("filterDropdown");
  const filterInputs = filterDropdown.querySelectorAll("input[type='checkbox']");

  /* ===== GUARDA DE SEGURANÇA ===== */
  if (!carousel || !btnPrev || !btnNext) {
    console.error("ERRO: Elementos do carrossel não encontrados");
    return;
  }

  /* ===== CARROSSEL ===== */
  function updateButtons() {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth - 5;
    btnPrev.style.display = carousel.scrollLeft <= 0 ? "none" : "flex";
    btnNext.style.display = carousel.scrollLeft >= maxScroll ? "none" : "flex";
  }

  btnNext.addEventListener("click", () => {
    carousel.scrollBy({ left: 360, behavior: "smooth" });
  });

  btnPrev.addEventListener("click", () => {
    carousel.scrollBy({ left: -360, behavior: "smooth" });
  });

  carousel.addEventListener("scroll", updateButtons);
  window.addEventListener("resize", updateButtons);
  updateButtons();

  /* ===== FILTRO ===== */
  filterToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    filterDropdown.style.display =
      filterDropdown.style.display === "flex" ? "none" : "flex";
  });

  function filtrarProjetos() {
    const ativos = Array.from(filterInputs)
      .filter(i => i.checked)
      .map(i => i.value.toLowerCase());

    projectCards.forEach(card => {
      const tags = card.dataset.tags.toLowerCase().split(" ");
      const mostrar =
        ativos.length === 0 ||
        ativos.some(tag => tags.includes(tag));

      card.style.display = mostrar ? "flex" : "none";
    });

    carousel.scrollTo({ left: 0, behavior: "smooth" });
    setTimeout(updateButtons, 200);
  }

  filterInputs.forEach(input =>
    input.addEventListener("change", filtrarProjetos)
  );

  document.addEventListener("click", () => {
    filterDropdown.style.display = "none";
  });

});


const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
