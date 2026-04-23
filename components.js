// Componente Estudiante A: Header
const renderHeader = (data) => {
    return `
        <header class="component">
            <h1>${data.titulo}</h1>
            <p>📍 Ubicación: ${data.ubicacion}</p>
        </header>
    `;
};

// Componente Estudiante B: Tabla de Horarios
const renderTablaHorarios = (horarios) => {
    let filas = horarios.map(h => `
        <tr>
            <td>${h.dia}</td>
            <td>${h.actividad}</td>
            <td>${h.hora}</td>
        </tr>
    `).join('');

    return `
        <div class="component">
            <h2>Horarios de la Piscina</h2>
            <table>
                <thead>
                    <tr>
                        <th>Día</th>
                        <th>Actividad</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody>
                    ${filas}
                </tbody>
            </table>
        </div>
    `;
};
