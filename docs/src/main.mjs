import { Navbar, navbarStyles } from "./componentes/navbar.mjs";
import { renderStudentCards } from "./componentes/fichas_estudiantes.mjs";

const header = document.getElementById("header");
if (!header) {
  throw new Error('No se encontró el contenedor de navegación "#header".');
}

header.innerHTML = Navbar();

const navStyle = document.createElement("style");
navStyle.textContent = navbarStyles();
document.head.append(navStyle);

const menuButton = document.getElementById("mobileBurguer");
const navLinks = document.getElementById("primaryNavigation");
if (!menuButton || !navLinks) {
  throw new Error("No se pudo inicializar el menú de navegación.");
}

function closeMenu() {
  navLinks.classList.remove("active");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menú de navegación");
}

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  navLinks.classList.toggle("active", !isExpanded);
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  menuButton.setAttribute(
    "aria-label",
    isExpanded ? "Abrir menú de navegación" : "Cerrar menú de navegación"
  );
});

navLinks.addEventListener("click", (event) => {
  if (event.target instanceof Element && event.target.closest("a")) {
    closeMenu();
  }
});

renderStudentCards();
