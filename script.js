// Elementos del DOM
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Evento al hacer clic en "Agregar tarea"
addTaskBtn.addEventListener('click', () => {
  const texto = taskInput.value.trim();

  // Validar que no esté vacío
  if (texto === '') {
    alert('Escribí una tarea primero.');
    return;
  }

  // Crear el elemento <li>
  const nuevaTarea = document.createElement('li');

  // Crear el texto de la tarea
  const textoTarea = document.createElement('span');
  textoTarea.textContent = texto;

  // Evento para marcar como completada
  textoTarea.addEventListener('click', () => {
    textoTarea.classList.toggle('completada');
  });

  // Crear botón de eliminar
  const botonEliminar = document.createElement('button');
  botonEliminar.textContent = 'Eliminar';
  botonEliminar.style.marginLeft = '10px';

  // Evento para eliminar la tarea
  botonEliminar.addEventListener('click', () => {
    nuevaTarea.remove();
  });

  // Agregar elementos al <li>
  nuevaTarea.appendChild(textoTarea);
  nuevaTarea.appendChild(botonEliminar);

  // Agregar <li> a la lista
  taskList.appendChild(nuevaTarea);

  // Limpiar el input
  taskInput.value = '';
});