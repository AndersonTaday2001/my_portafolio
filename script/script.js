// Menú hamburguesa para móvil
const toggle = document.querySelector(".navbar__toggle");
const navbar = document.querySelector(".navbar");

toggle.addEventListener("click", () => {
  const isOpen = navbar.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", isOpen);
});

// Cierra el menú automáticamente al hacer clic en un link (buena práctica en móvil)
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
});
