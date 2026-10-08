import { students } from "../datos/estudiantes.mjs";

function createStudentCard(student) {
  const article = document.createElement("article");
  article.className = "student-card";

  const avatar = document.createElement("div");
  avatar.className = "student-avatar";
  avatar.setAttribute("aria-hidden", "true");
  avatar.textContent = `${student.nombre.charAt(0)}${student.apellido.charAt(0)}`;

  const name = document.createElement("h3");
  name.className = "student-name";
  name.textContent = `${student.nombre} ${student.apellido}`;

  const details = document.createElement("dl");
  details.className = "student-details";

  for (const [label, value] of [
    ["Edad", `${student.edad} años`],
    ["Altura", student.altura],
    ["Teléfono", student.telefono]
  ]) {
    const item = document.createElement("div");
    item.className = "student-detail";

    const term = document.createElement("dt");
    term.textContent = label;

    const description = document.createElement("dd");
    description.textContent = value;

    item.append(term, description);
    details.append(item);
  }

  article.append(avatar, name, details);
  return article;
}

export function renderStudentCards() {
  const section = document.getElementById("section1");
  if (!section) {
    throw new Error('No se encontró la sección de estudiantes "#section1".');
  }

  const heading = document.createElement("div");
  heading.className = "section-heading";

  const eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = "Conócenos";

  const title = document.createElement("h1");
  title.id = "students-title";
  title.textContent = "Nuestros estudiantes";

  const introduction = document.createElement("p");
  introduction.textContent = "Personas únicas que forman parte de nuestra comunidad.";

  heading.append(eyebrow, title, introduction);

  const list = document.createElement("div");
  list.className = "student-grid";
  list.setAttribute("aria-label", "Listado de estudiantes");
  list.append(...students.map(createStudentCard));

  section.replaceChildren(heading, list);
}
