export function Navbar() {
  return `
    <nav class="navbar" aria-label="Navegación principal">
      <a class="logo" href="#section1">Mi Sitio</a>
      <button
        class="botonBurguer"
        id="mobileBurguer"
        type="button"
        aria-label="Abrir menú de navegación"
        aria-expanded="false"
        aria-controls="primaryNavigation"
      >
        <span class="bar" aria-hidden="true"></span>
        <span class="bar" aria-hidden="true"></span>
        <span class="bar" aria-hidden="true"></span>
      </button>
      <ul class="nav-links" id="primaryNavigation">
        <li><a href="#section1">Inicio</a></li>
        <li><a href="#section2">Servicios</a></li>
        <li><a href="#section3">Contacto</a></li>
      </ul>
    </nav>
  `;
}

export function navbarStyles() {
  return `
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      padding: 1rem max(1.25rem, calc((100vw - 1120px) / 2));
      background-color: #172554;
      color: #fff;
    }
    .navbar .logo {
      color: #fff;
      font-size: 1.35rem;
      font-weight: 750;
      letter-spacing: -0.03em;
      text-decoration: none;
    }
    .navbar .nav-links {
      display: flex;
      align-items: center;
      gap: 1.75rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .navbar .nav-links a {
      color: #e0e7ff;
      font-size: 0.95rem;
      text-decoration: none;
      transition: color 0.2s ease;
    }
    .navbar .nav-links a:hover,
    .navbar .nav-links a:focus-visible { color: #fff; }
    .navbar .botonBurguer {
      display: none;
      padding: 0.35rem;
      border: 0;
      background: transparent;
      cursor: pointer;
    }
    .navbar .bar {
      display: block;
      height: 2px;
      width: 25px;
      margin: 5px 0;
      border-radius: 2px;
      background-color: #fff;
      transition: transform 0.2s ease, opacity 0.2s ease;
    }
    @media (max-width: 768px) {
      .navbar { padding: 1rem 1.25rem; }
      .navbar .botonBurguer { display: block; }
      .navbar .nav-links {
        display: none;
        flex: 0 0 100%;
        flex-direction: column;
        align-items: stretch;
        gap: 0;
        padding-top: 0.75rem;
      }
      .navbar .nav-links.active { display: flex; }
      .navbar .nav-links a {
        display: block;
        padding: 0.85rem 0;
        border-top: 1px solid rgb(255 255 255 / 12%);
      }
    }
  `;
}
