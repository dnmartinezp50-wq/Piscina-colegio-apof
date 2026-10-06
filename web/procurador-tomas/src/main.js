import { Navbar } from './styles/navbar.js';
import { Section } from './styles/section.js';
import './styles/estilos.css';

const app = document.querySelector('#app');
const contact = {
  phone: '+34971770574',
  phoneDisplay: '+34 971 770 574',
  whatsapp: '34609649224',
  email: 'matias@ibserveis.com',
  instagram: 'https://www.instagram.com/procuradortomas/',
  facebook: 'https://www.facebook.com/profile.php?id=100006727366308',
};

if (!app) {
  throw new Error('No se encontró el contenedor principal de la aplicación.');
}

app.append(
  Navbar({ phone: contact.phone }),
  Section({
    id: 'inicio',
    className: 'hero-section',
    contenido: `
      <div class="hero-shade"></div>
      <div class="hero-copy">
        <p class="eyebrow">Procurador en Mallorca · ICPIB n.º 120</p>
        <h1>“El Procurador es el representante procesal del ciudadano”.</h1>
        <p class="hero-intro">
          Representación y gestión procesal en Palma, Manacor e Inca.
        </p>
        <a class="button button-light" href="#quienessomos">Conozca el despacho <span aria-hidden="true">↓</span></a>
      </div>
      <span class="hero-caption">Gabriel Tomás Gili · Procurador de los Tribunales</span>
    `,
  }),
  Section({
    id: 'quienessomos',
    className: 'about-section',
    contenido: `
      <div class="about-copy">
        <p class="eyebrow">El despacho</p>
        <h2>Quienes somos</h2>
        <p class="lead">Procuradores Mallorca - Gabriel Tomás Gili</p>
        <p class="credential">Procurador Colegiado ICPIB n.º 120</p>
        <div class="about-rule"></div>
        <p>
          Los Procuradores agilizan los procesos judiciales: siguen los procedimientos
          desde la demanda y se ocupan de solucionar buena parte de los obstáculos
          que podrían retrasar la sentencia.
        </p>
        <p>
          Informan al cliente del coste aproximado del procedimiento, así como de las
          consecuencias de ser condenado a las costas del mismo.
        </p>
        <p>
          Se responsabilizan de los trámites, emplazamientos, citaciones y notificaciones,
          y asisten a las diligencias y actos necesarios del pleito en representación
          y a favor de su cliente.
        </p>
        <p>
          Transmiten al abogado las resoluciones judiciales recibidas, así como los
          escritos que se presenten en nombre del cliente.
        </p>
      </div>
      <aside class="practice-card">
        <img
          src="https://procuradortomas.com/img/trabajosrealizados.jpg"
          alt="Actividad profesional de procuraduría"
          loading="lazy"
        />
        <div class="practice-card-content">
          <span class="card-overline">Ámbito de actuación</span>
          <h3>Servicio en toda Mallorca</h3>
          <p>Partidos judiciales de Palma, Manacor e Inca. Otros partidos, por encargo.</p>
          <a class="text-link" href="#contacto">Consultar disponibilidad <span aria-hidden="true">→</span></a>
        </div>
      </aside>
    `,
  }),
  Section({
    id: 'preguntas',
    className: 'faq-section',
    contenido: `
      <div class="section-heading">
        <p class="eyebrow">Información de interés</p>
        <h2>Preguntas frecuentes</h2>
        <p>Una visión sencilla de algunas funciones del procurador.</p>
      </div>
      <div class="faq-list">
        <details class="faq-item" open>
          <summary>¿Qué es el servicio integral?</summary>
          <div class="faq-answer">
            <p>
              El procurador realiza el seguimiento de los procedimientos, gestiona
              sus trámites y mantiene la comunicación con el juzgado, el abogado y
              el cliente durante el proceso.
            </p>
          </div>
        </details>
        <details class="faq-item">
          <summary>Actos de comunicación</summary>
          <div class="faq-answer">
            <p>
              Recibe y transmite emplazamientos, citaciones y notificaciones. Cuando
              el cliente lo elige y el procedimiento lo permite, puede realizar
              directamente determinados actos de comunicación al demandado.
            </p>
          </div>
        </details>
      </div>
    `,
  }),
  Section({
    id: 'contacto',
    className: 'contact-section',
    contenido: `
      <div class="contact-layout">
        <div class="contact-copy">
          <p class="eyebrow">Contacto</p>
          <h2>Hablemos de su procedimiento.</h2>
          <p class="contact-intro">
            Para consultar disponibilidad o solicitar un presupuesto, puede llamar,
            escribir por WhatsApp o enviarnos su consulta.
          </p>
          <div class="direct-contact">
            <a class="contact-method" href="tel:${contact.phone}">
              <span class="contact-method-icon" aria-hidden="true">01</span>
              <span><small>Llamar al despacho</small><strong>${contact.phoneDisplay}</strong></span>
            </a>
            <a
              class="contact-method"
              href="https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hola, quisiera consultar sobre servicios de procuraduría en Mallorca.')}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="contact-method-icon whatsapp-icon" aria-hidden="true">02</span>
              <span><small>WhatsApp</small><strong>Enviar un mensaje</strong></span>
            </a>
            <a class="contact-method" href="mailto:${contact.email}">
              <span class="contact-method-icon" aria-hidden="true">03</span>
              <span><small>Correo electrónico</small><strong>${contact.email}</strong></span>
            </a>
          </div>
          <div class="office-hours">
            <h3>Horario de despacho</h3>
            <p><span>Lunes a viernes</span><strong>8:00–19:00</strong></p>
            <p><span>Sábado y domingo</span><strong>Cerrado</strong></p>
          </div>
        </div>
        <form class="contact-form" id="contact-form">
          <div class="form-heading">
            <span class="form-step">CONSULTA · MALLORCA</span>
            <h3>Solicite información</h3>
            <p>Los campos marcados con * son obligatorios.</p>
          </div>
          <div class="form-row">
            <label>
              Nombre *
              <input name="name" type="text" autocomplete="name" placeholder="Su nombre" required />
            </label>
            <label>
              Correo electrónico *
              <input name="email" type="email" autocomplete="email" placeholder="nombre@ejemplo.com" required />
            </label>
          </div>
          <label>
            Motivo de la consulta
            <select name="subject">
              <option value="Información y presupuesto">Información y presupuesto</option>
              <option value="Representación procesal">Representación procesal</option>
              <option value="Actos de comunicación">Actos de comunicación</option>
              <option value="Otra consulta">Otra consulta</option>
            </select>
          </label>
          <label>
            Mensaje *
            <textarea name="message" rows="4" placeholder="Describa brevemente su consulta. No incluya datos confidenciales." required></textarea>
          </label>
          <button class="button button-dark form-submit" type="submit">
            Preparar correo <span aria-hidden="true">↗</span>
          </button>
          <p class="form-note" id="form-note" aria-live="polite">
            El formulario abrirá su aplicación de correo; no envía los datos automáticamente.
          </p>
        </form>
      </div>
    `,
  }),
);

const contactForm = document.querySelector('#contact-form');
const formNote = document.querySelector('#form-note');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) {
    return;
  }

  const formData = new FormData(contactForm);
  const subject = `[Consulta web] ${formData.get('subject')}`;
  const body = [
    `Nombre: ${formData.get('name')}`,
    `Correo de respuesta: ${formData.get('email')}`,
    '',
    'Consulta:',
    formData.get('message'),
  ].join('\n');

  formNote.textContent = 'Se ha preparado el correo. Revíselo y envíelo desde su aplicación de correo.';
  window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

const footer = document.createElement('footer');
footer.className = 'site-footer';
footer.innerHTML = `
  <div class="footer-inner">
    <a class="footer-brand" href="#inicio">Procurador <strong>Tomás</strong></a>
    <p class="footer-caption">Gabriel Tomás Gili · Procurador Colegiado ICPIB n.º 120</p>
    <div class="social-links" aria-label="Redes y enlaces profesionales">
      <a href="${contact.instagram}" target="_blank" rel="noopener noreferrer">Instagram <span aria-hidden="true">↗</span></a>
      <a href="${contact.facebook}" target="_blank" rel="noopener noreferrer">Facebook <span aria-hidden="true">↗</span></a>
      <a href="https://www.cgpe.es/" target="_blank" rel="noopener noreferrer">Procuradores de España <span aria-hidden="true">↗</span></a>
      <a href="https://www.procuradoresdebaleares.es/" target="_blank" rel="noopener noreferrer">Procuradores de Baleares <span aria-hidden="true">↗</span></a>
    </div>
    <div class="footer-legal">
      <a href="https://procuradortomas.com/legal.html" target="_blank" rel="noopener noreferrer">Aviso legal</a>
      <a href="https://procuradortomas.com/politicaprivacidad.html" target="_blank" rel="noopener noreferrer">Política de privacidad</a>
      <span>© ${new Date().getFullYear()} Procurador Tomás</span>
    </div>
  </div>
`;
app.append(footer);
