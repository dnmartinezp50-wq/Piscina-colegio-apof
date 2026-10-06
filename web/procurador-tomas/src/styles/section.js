export function Section({ id, className = '', contenido }) {
  const section = document.createElement('section');
  section.id = id;
  section.className = `content-section ${className}`.trim();
  section.innerHTML = contenido;
  return section;
}