let proyectos = [
  {
    nombre: "Rediseño Web",
    integrantes: "Juan, María",
    telefono: "0999999999",
    fechaInicio: "2025-05-01",
    fechaFin: "2025-06-01",
    descripcion: "Actualización de la interfaz web."
  },
  {
    nombre: "Implementación CRM",
    integrantes: "Pedro, Ana",
    telefono: "0988888888",
    fechaInicio: "2025-05-10",
    fechaFin: "2025-07-15",
    descripcion: "Integración de un CRM para ventas."
  }
];

let proyectoActualIndex = null;

function mostrarProyectos() {
  const lista = document.getElementById("project-list");
  lista.innerHTML = "";

  proyectos.forEach((proyecto, index) => {
    const div = document.createElement("div");
    div.className = "project-item";

    div.innerHTML = `
      <h3>${proyecto.nombre}</h3>
      <p><strong>Integrantes:</strong> ${proyecto.integrantes}</p>
      <p><strong>Teléfono:</strong> ${proyecto.telefono}</p>
      <p><strong>Fecha inicio:</strong> ${proyecto.fechaInicio}</p>
      <p><strong>Fecha fin:</strong> ${proyecto.fechaFin}</p>
      <p><strong>Descripción:</strong> ${proyecto.descripcion}</p>
      <button class="complete-btn" style="background-color: #f59e0b;" onclick="abrirEditarProyecto(${index})">Editar</button>
      <button class="complete-btn" style="background-color: #ef4444;" onclick="eliminarProyecto(${index})">Eliminar</button>
    `;

    lista.appendChild(div);
  });
}

function abrirEditarProyecto(index) {
  proyectoActualIndex = index;
  const proyecto = proyectos[index];

  document.getElementById("project-name").value = proyecto.nombre;
  document.getElementById("project-members").value = proyecto.integrantes;
  document.getElementById("project-phone").value = proyecto.telefono;
  document.getElementById("project-start").value = proyecto.fechaInicio;
  document.getElementById("project-end").value = proyecto.fechaFin;
  document.getElementById("project-desc").value = proyecto.descripcion;

  document.getElementById("project-modal").classList.remove("hidden");
}

function cerrarModalProyecto() {
  document.getElementById("project-modal").classList.add("hidden");
}

function guardarProyecto() {
  const nombre = document.getElementById("project-name").value;
  const integrantes = document.getElementById("project-members").value;
  const telefono = document.getElementById("project-phone").value;
  const inicio = document.getElementById("project-start").value;
  const fin = document.getElementById("project-end").value;
  const desc = document.getElementById("project-desc").value;

  if (nombre && integrantes && telefono && inicio && fin && desc) {
    if (proyectoActualIndex === null) {
      // Añadir nuevo proyecto
      proyectos.push({
        nombre: nombre,
        integrantes: integrantes,
        telefono: telefono,
        fechaInicio: inicio,
        fechaFin: fin,
        descripcion: desc
      });
    } else {
      // Editar proyecto existente
      proyectos[proyectoActualIndex].nombre = nombre;
      proyectos[proyectoActualIndex].integrantes = integrantes;
      proyectos[proyectoActualIndex].telefono = telefono;
      proyectos[proyectoActualIndex].fechaInicio = inicio;
      proyectos[proyectoActualIndex].fechaFin = fin;
      proyectos[proyectoActualIndex].descripcion = desc;
      proyectoActualIndex = null;
    }

    cerrarModalProyecto();
    limpiarCamposProyecto();
    mostrarProyectos();
  } else {
    alert("Por favor completa todos los campos.");
  }
}

function limpiarCamposProyecto() {
  document.getElementById("project-name").value = "";
  document.getElementById("project-members").value = "";
  document.getElementById("project-phone").value = "";
  document.getElementById("project-start").value = "";
  document.getElementById("project-end").value = "";
  document.getElementById("project-desc").value = "";
}

function eliminarProyecto(index) {
  if (confirm("¿Estás seguro de que quieres eliminar este proyecto?")) {
    proyectos.splice(index, 1);
    mostrarProyectos();
  }
}

// Abrir modal para nuevo proyecto
document.getElementById("add-project-btn").addEventListener("click", () => {
  proyectoActualIndex = null;
  limpiarCamposProyecto();
  document.getElementById("project-modal").classList.remove("hidden");
});

// Cerrar modal
document.getElementById("close-modal").addEventListener("click", cerrarModalProyecto);

// Guardar proyecto (nuevo o editado)
document.getElementById("save-project-btn").addEventListener("click", guardarProyecto);
