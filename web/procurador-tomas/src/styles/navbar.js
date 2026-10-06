export function Navbar({ phone }) {
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <div class="utility-bar">
      <div class="utility-inner">
        <span>Procuraduría en Mallorca</span>
        <a href="https://www.cgpe.es/" target="_blank" rel="noopener noreferrer">Consejo General de Procuradores <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <nav class="navbar" aria-label="Navegación principal">
      <a class="logo" href="#inicio" aria-label="Procurador Tomás, inicio">
        <img src="https://procuradortomas.com/img/logoTomas1.jpg" alt="Procurador Tomás" />
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-label="Abrir menú" aria-controls="nav-links">
        <span class="sr-only">Abrir menú</span>
        <span class="menu-bar"></span>
        <span class="menu-bar"></span>
        <span class="menu-bar"></span>
      </button>
      <ul class="nav-links" id="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#quienessomos">Quienes somos</a></li>
        <li><a href="#preguntas">Preguntas</a></li>
        <li><a href="#contacto">Contacto</a></li>
        <li class="nav-call"><a href="tel:${phone}">Llamar <span aria-hidden="true">↗</span></a></li>
      </ul>
    </nav>
  `;

  const menuButton = header.querySelector('.menu-toggle');
  const links = header.querySelector('.nav-links');

  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isExpanded));
    menuButton.setAttribute('aria-label', isExpanded ? 'Abrir menú' : 'Cerrar menú');
    links.classList.toggle('active', !isExpanded);
  });

  links.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.closest('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menú');
      links.classList.remove('active');
    }
  });

  return header;
}
