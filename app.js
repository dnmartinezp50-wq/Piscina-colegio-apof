// 1. Datos de la aplicación (Modelo)
const estado = {
    infoColegio: {
        titulo: "Piscina Municipal Colegio APOF",
        ubicacion: "Calle Educativa, 123"
    },
    horarios: [
        { dia: "Lunes", actividad: "Natación Libre", hora: "16:00 - 18:00" },
        { dia: "Martes", actividad: "Cursillo Niños", hora: "17:00 - 19:00" },
        { dia: "Miércoles", actividad: "Aquagym", hora: "10:00 - 11:00" }
    ]
};

// 2. Función Principal (Controlador)
function main() {
    const app = document.getElementById('app');

    // Generamos el HTML uniendo los componentes (Vistas)
    const htmlFinal = `
        ${renderHeader(estado.infoColegio)}
        ${renderTablaHorarios(estado.horarios)}
        <footer class="component">
            <p>© 2024 - Creado por Equipo de 2 Personas</p>
        </footer>
    `;

    // Renderizado único
    app.innerHTML = htmlFinal;
}

// Ejecutar al cargar
main();

