let tareas = [
  {
    nombre: "Diseñar interfaz",
    proyecto: "App Web CRM",
    fechaLimite: "2025-06-01",
    estado: "Pendiente"
  },
  {
    nombre: "Revisión de código",
    proyecto: "Sistema Contable",
    fechaLimite: "2025-06-05",
    estado: "En progreso"
  },
  {
    nombre: "Presentar informe",
    proyecto: "Auditoría interna",
    fechaLimite: "2025-06-10",
    estado: "Pendiente"
  }
];

let tareaActualIndex = null;

function mostrarTareas() {
  const contenedor = document.getElementById("task-list");
  contenedor.innerHTML = "";

  tareas.forEach((tarea, index) => {
    const div = document.createElement("div");
    div.className = "task-card";

    div.innerHTML = `
      <h3>${tarea.nombre}</h3>
      <p><strong>Proyecto:</strong> ${tarea.proyecto}</p>
      <p><strong>Fecha límite:</strong> ${tarea.fechaLimite}</p>
      <p><strong>Estado:</strong> <span id="estado-${index}">${tarea.estado}</span></p>
      <button class="complete-btn" onclick="marcarCompletada(${index})">Marcar como completada</button>
      <button class="complete-btn" onclick="abrirEditarTarea(${index})" style="background-color: #f59e0b;">Editar</button>
      <button class="complete-btn" onclick="eliminarTarea(${index})" style="background-color: #ef4444;">Eliminar</button>
    `;

    contenedor.appendChild(div);
  });
}

function marcarCompletada(index) {
  tareas[index].estado = "Completada";
  mostrarTareas();
}

function abrirEditarTarea(index) {
  tareaActualIndex = index;
  const tarea = tareas[index];

  document.getElementById("edit-task-name").value = tarea.nombre;
  document.getElementById("edit-task-project").value = tarea.proyecto;
  document.getElementById("edit-task-deadline").value = tarea.fechaLimite;
  document.getElementById("edit-task-status").value = tarea.estado;

  document.getElementById("edit-task-modal").classList.remove("hidden");
}

function cerrarEditarTarea() {
  document.getElementById("edit-task-modal").classList.add("hidden");
}

function guardarEdicionTarea() {
  const nombre = document.getElementById("edit-task-name").value;
  const proyecto = document.getElementById("edit-task-project").value;
  const fecha = document.getElementById("edit-task-deadline").value;
  const estado = document.getElementById("edit-task-status").value;

  tareas[tareaActualIndex].nombre = nombre;
  tareas[tareaActualIndex].proyecto = proyecto;
  tareas[tareaActualIndex].fechaLimite = fecha;
  tareas[tareaActualIndex].estado = estado;

  cerrarEditarTarea();
  mostrarTareas();
}

function eliminarTarea(index) {
  if (confirm("¿Estás seguro de que quieres eliminar esta tarea?")) {
    tareas.splice(index, 1);
    mostrarTareas();
  }
}

// Modal para añadir tarea
document.getElementById("add-task-btn").addEventListener("click", () => {
  document.getElementById("add-task-modal").classList.remove("hidden");
});

document.getElementById("close-add-task").addEventListener("click", () => {
  document.getElementById("add-task-modal").classList.add("hidden");
});

document.getElementById("save-new-task-btn").addEventListener("click", () => {
  const nombre = document.getElementById("new-task-name").value;
  const proyecto = document.getElementById("new-task-project").value;
  const fecha = document.getElementById("new-task-deadline").value;
  const estado = document.getElementById("new-task-status").value;

  if (nombre && proyecto && fecha && estado) {
    tareas.push({
      nombre: nombre,
      proyecto: proyecto,
      fechaLimite: fecha,
      estado: estado
    });
    document.getElementById("add-task-modal").classList.add("hidden");
    document.getElementById("new-task-name").value = "";
    document.getElementById("new-task-project").value = "";
    document.getElementById("new-task-deadline").value = "";
    document.getElementById("new-task-status").value = "Pendiente";
    mostrarTareas();
  } else {
    alert("Por favor completa todos los campos.");
  }
});

// Modal de edición de tarea
document.getElementById("close-edit-task").addEventListener("click", cerrarEditarTarea);
document.getElementById("save-edit-task-btn").addEventListener("click", guardarEdicionTarea);
