import axios from 'axios';
import './style.css';

// VARIABLES
const taskContainer = document.getElementById('task-container'); // Contenedor de tareas en el DOM
const taskForm = document.getElementById('task-form'); // Formulario para agregar nuevas tareas

// LISTENERS
loadListeners(); // Cargar los event listeners al iniciar

function loadListeners() {
  document.addEventListener('DOMContentLoaded', readTasks); // Cargar las tareas cuando el DOM se ha cargado
  taskForm.addEventListener('submit', createTask); // Manejar el evento de envío del formulario
}

// FUNCTIONS

// Función para leer las tareas del servidor y mostrarlas en el DOM
async function readTasks() {
  const { data } = await axios.get('http://localhost:3000/task'); // Obtener tareas del servidor
  displayTasks(data); // Mostrar las tareas en el DOM
}

// Función para mostrar las tareas en el contenedor de tareas
function displayTasks(tasks) {
  taskContainer.innerHTML = ''; // Limpiar el contenedor de tareas
  tasks.forEach(task => {
    const taskElement = createTaskElement(task); // Crear un elemento de tarea para cada tarea
    taskContainer.appendChild(taskElement); // Agregar el elemento de tarea al contenedor
  });
}

// Función para crear un elemento de tarea en el DOM
function createTaskElement(task) {
  const taskElement = document.createElement('div'); // Crear un div para la tarea
  taskElement.className = 'task'; // Asignar clase 'task' al div
  taskElement.innerHTML = `
    <h3>${task.title}</h3>
    <p>${task.author}</p>
    <button class="delete-button" data-id="${task.id}">Delete</button>
  `; // Definir el contenido HTML del elemento de tarea
  taskElement.querySelector('.delete-button').addEventListener('click', deleteTask); // Agregar event listener al botón de eliminación
  return taskElement; // Retornar el elemento de tarea
}

// Función para manejar el evento de creación de una nueva tarea
async function createTask(event) {
  event.preventDefault(); // Prevenir la recarga de la página al enviar el formulario
  
  const title = document.getElementById('task-title').value; // Obtener el título de la nueva tarea
  const author = document.getElementById('task-author').value; // Obtener el autor de la nueva tarea
  
  const taskToCreate = {
    title,
    author,
  }; // Crear un objeto con los datos de la nueva tarea

  const { data: newTask } = await axios.post('http://localhost:3000/task', taskToCreate); // Enviar la nueva tarea al servidor y obtener la tarea creada
  const taskElement = createTaskElement(newTask); // Crear un elemento de tarea para la nueva tarea
  taskContainer.appendChild(taskElement); // Agregar el nuevo elemento de tarea al contenedor
  
  taskForm.reset(); // Resetear el formulario
}

// Función para manejar el evento de eliminación de una tarea
async function deleteTask(event) {
  const idToTaskDelete = event.target.getAttribute('data-id'); // Obtener el ID de la tarea a eliminar
  await axios.delete(`http://localhost:3000/task/${idToTaskDelete}`); // Enviar la solicitud de eliminación al servidor

  // Eliminar el elemento de tarea del DOM
  event.target.parentElement.remove(); // Remover el elemento padre (la tarea) del botón de eliminación
}

// Leer y mostrar las tareas al cargar la página
readTasks();
