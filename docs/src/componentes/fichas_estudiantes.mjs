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

  const pageHeading = document.createElement("div");
  pageHeading.className = "page-heading";

  const eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = "PANEL DE COMUNIDAD";

  const title = document.createElement("h1");
  title.id = "students-title";
  title.textContent = "Directorio de estudiantes";

  const introduction = document.createElement("p");
  introduction.textContent = "Conoce a las personas que hacen crecer nuestra comunidad.";

  const headingCopy = document.createElement("div");
  headingCopy.append(eyebrow, title, introduction);

  const currentYear = document.createElement("span");
  currentYear.className = "academic-year";
  const statusIndicator = document.createElement("span");
  statusIndicator.className = "status-indicator";
  statusIndicator.setAttribute("aria-hidden", "true");
  const today = new Date();
  const calendarYear = today.getFullYear();
  const schoolYearStartsThisYear = today.getMonth() >= 7;
  const firstSchoolYear = schoolYearStartsThisYear ? calendarYear : calendarYear - 1;
  currentYear.append(
    statusIndicator,
    `Curso ${firstSchoolYear} — ${firstSchoolYear + 1}`
  );

  pageHeading.append(headingCopy, currentYear);

  const averageAge = students.reduce((sum, student) => sum + student.edad, 0) / students.length;
  const averageHeight = students.reduce(
    (sum, student) => sum + Number.parseFloat(student.altura),
    0
  ) / students.length;

  const stats = document.createElement("div");
  stats.className = "stats-grid";
  stats.setAttribute("aria-label", "Resumen del alumnado");

  for (const [label, value, note, icon, tone] of [
    ["Estudiantes", String(students.length).padStart(2, "0"), "Alumnado registrado", "↗", "blue"],
    ["Edad promedio", `${averageAge.toFixed(1)} años`, "En toda la comunidad", "◷", "amber"],
    ["Altura promedio", `${averageHeight.toFixed(2)} m`, "Promedio del alumnado", "↕", "green"]
  ]) {
    const card = document.createElement("article");
    card.className = `stat-card stat-${tone}`;
    const marker = document.createElement("span");
    marker.className = "stat-icon";
    marker.setAttribute("aria-hidden", "true");
    marker.textContent = icon;
    const caption = document.createElement("p");
    caption.textContent = label;
    const metric = document.createElement("strong");
    metric.textContent = value;
    const detail = document.createElement("small");
    detail.textContent = note;
    card.append(marker, caption, metric, detail);
    stats.append(card);
  }

  const directoryHeader = document.createElement("div");
  directoryHeader.className = "directory-header";
  const directoryTitle = document.createElement("h2");
  directoryTitle.textContent = "Todo el alumnado";
  const resultCount = document.createElement("span");
  resultCount.className = "result-count";
  resultCount.setAttribute("aria-live", "polite");
  directoryHeader.append(directoryTitle, resultCount);

  const filters = document.createElement("div");
  filters.className = "directory-filters";

  const searchLabel = document.createElement("label");
  searchLabel.className = "search-field";
  searchLabel.setAttribute("for", "studentSearch");
  const searchIcon = document.createElement("span");
  searchIcon.className = "search-icon";
  searchIcon.setAttribute("aria-hidden", "true");
  searchIcon.textContent = "⌕";
  const search = document.createElement("input");
  search.id = "studentSearch";
  search.type = "search";
  search.placeholder = "Buscar estudiante...";
  search.autocomplete = "off";
  searchLabel.append(searchIcon, search);

  const ageFilter = document.createElement("select");
  ageFilter.id = "ageFilter";
  ageFilter.setAttribute("aria-label", "Filtrar estudiantes por edad");
  for (const [value, label] of [
    ["all", "Todas las edades"],
    ["under-21", "Menores de 21"],
    ["21-and-over", "21 o más"]
  ]) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    ageFilter.append(option);
  }
  filters.append(searchLabel, ageFilter);

  const list = document.createElement("div");
  list.className = "student-grid";
  list.setAttribute("aria-label", "Listado de estudiantes");

  function updateList() {
    const query = search.value.trim().toLocaleLowerCase("es");
    const ageRange = ageFilter.value;
    const filteredStudents = students.filter((student) => {
      const fullName = `${student.nombre} ${student.apellido}`.toLocaleLowerCase("es");
      const matchesSearch = fullName.includes(query);
      const matchesAge = ageRange === "all"
        || (ageRange === "under-21" && student.edad < 21)
        || (ageRange === "21-and-over" && student.edad >= 21);
      return matchesSearch && matchesAge;
    });

    resultCount.textContent = `${filteredStudents.length} ${filteredStudents.length === 1 ? "estudiante" : "estudiantes"}`;
    list.replaceChildren(...filteredStudents.map(createStudentCard));

    if (filteredStudents.length === 0) {
      const emptyState = document.createElement("p");
      emptyState.className = "empty-state";
      emptyState.textContent = "No encontramos estudiantes con esos criterios. Prueba otra búsqueda.";
      list.append(emptyState);
    }
  }

  search.addEventListener("input", updateList);
  ageFilter.addEventListener("change", updateList);
  updateList();

  section.replaceChildren(pageHeading, stats, directoryHeader, filters, list);
}
