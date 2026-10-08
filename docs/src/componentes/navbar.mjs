export function Navbar() {
  return `
    <nav class="navbar" aria-label="Navegación principal">
      <a class="logo" href="#section1" aria-label="Aula, inicio">
        <span class="logo-mark" aria-hidden="true"><span></span><span></span><span></span><span></span></span>
        <span class="logo-copy">aula<span class="logo-period">.</span><small>COMUNIDAD ESCOLAR</small></span>
      </a>
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
        <li><a class="nav-link nav-link-current" href="#section1" aria-current="page">Estudiantes</a></li>
        <li><a class="nav-link" href="#section2">Comunidad</a></li>
        <li><a class="nav-link" href="#section3">Contacto</a></li>
      </ul>
    </nav>
  `;
}

export function navbarStyles() {
  return `
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 76px;
      padding: 0 max(1.25rem, calc((100vw - 1180px) / 2));
      border-bottom: 1px solid #e8edf5;
      background-color: rgb(255 255 255 / 96%);
      box-shadow: 0 4px 18px rgb(28 43 74 / 4%);
      color: #fff;
    }
    .navbar .logo {
      display: inline-flex;
      align-items: center;
      gap: 0.7rem;
      color: #fff;
      text-decoration: none;
    }
    .logo-mark {
      display: grid;
      width: 38px;
      height: 38px;
      grid-template-columns: repeat(2, 1fr);
      gap: 3px;
      padding: 7px;
      transform: rotate(-6deg);
      border-radius: 12px;
      background: #3158d4;
    }
    .logo-mark span { border-radius: 3px; background: #fff; }
    .logo-mark span:nth-child(2) { opacity: 0.65; }
    .logo-mark span:nth-child(3) { opacity: 0.8; }
    .logo-copy {
      color: #1c2b4a;
      font-size: 1.3rem;
      font-weight: 800;
      letter-spacing: -0.055em;
      line-height: 1;
    }
    .logo-period { color: #3158d4; }
    .logo-copy small {
      display: block;
      margin-top: 0.3rem;
      color: #8190a7;
      font-size: 0.53rem;
      font-weight: 750;
      letter-spacing: 0.105em;
    }
    .navbar .nav-links {
      display: flex;
      align-items: center;
      gap: 0.35rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .navbar .nav-links a.nav-link {
      display: block;
      padding: 0.65rem 0.85rem;
      border-radius: 0.55rem;
      color: #65738a;
      font-size: 0.95rem;
      text-decoration: none;
      transition: color 0.2s ease, background-color 0.2s ease;
    }
    .navbar .nav-links a.nav-link:hover,
    .navbar .nav-links a.nav-link-current {
      background: #eef2ff;
      color: #3158d4;
    }
    .navbar .botonBurguer {
      display: none;
      padding: 0.35rem;
      border: 0;
      border-radius: 0.5rem;
      background: #f1f4fa;
      cursor: pointer;
    }
    .navbar .bar {
      display: block;
      width: 22px;
      height: 2px;
      margin: 5px 0;
      border-radius: 4px;
      background: #263653;
      transition: transform 0.2s ease, opacity 0.2s ease;
    }
    @media (max-width: 768px) {
      .navbar {
        min-height: 68px;
        flex-wrap: wrap;
        padding: 0.75rem 1.25rem;
      }
      .navbar .botonBurguer { display: block; }
      .navbar .nav-links {
        display: none;
        flex: 0 0 100%;
        flex-direction: column;
        align-items: stretch;
        gap: 0.25rem;
        padding: 0.75rem 0 0.25rem;
      }
      .navbar .nav-links.active { display: flex; }
      .navbar .nav-links a.nav-link { padding: 0.8rem 0.85rem; }
    }
  `;
}
