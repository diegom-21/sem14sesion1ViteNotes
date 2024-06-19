# Task App

Esta aplicacion permite leer, agregar y eliminar tareas usando una interfaz de usuario. La aplicación está desarrollada utilizando HTML, CSS y JavaScript, junto con Axios para las solicitudes HTTP.

## Desarrollo

1. **HTML:**
   - Contenedor "task-container" para mostrar las tareas.
   - Formulario "task-form" para agregar nuevas tareas.

2. **CSS:**
   - Estilos para mejorar la apariencia visual de la aplicación.

3. **JavaScript:**
   - Se implementaron funciones para leer, agregar y eliminar tareas, interactuando con un servidor local.

## Main.js

1. **Instalaciones y Variables:**
   - Se instalo Axios para manejar las solicitudes HTTP.
   - Se definieron referencias al contenedor de tareas y al formulario.

2. **Cargar Listeners:**
   - Se cargaron event listeners para leer las tareas al cargar la página y manejar el envío del formulario.

3. **Funciones Principales:**

   - **readTasks:**
     - Realiza una solicitud GET al servidor para obtener todas las tareas.
     - Llama a `displayTasks` para mostrar las tareas en el DOM.

   - **displayTasks:**
     - Limpia el contenedor de tareas.
     - Crea y agrega elementos de tareas al DOM para cada tarea obtenida del servidor.

   - **createTaskElement:**
     - Crea un elemento `div` para una tarea.
     - Añade un botón de eliminación con un event listener para manejar la eliminación de la tarea.

   - **createTask:**
     - Maneja el evento de envío del formulario.
     - Obtiene los valores del formulario y crea un objeto de tarea.
     - Envía la nueva tarea al servidor con una solicitud POST.
     - Agrega la tarea recién creada al contenedor de tareas.
     - Resetea el formulario.

   - **deleteTask:**
     - Obtiene el ID de la tarea a eliminar desde el atributo `data-id` del botón.
     - Envía una solicitud DELETE al servidor para eliminar la tarea.
     - Elimina el elemento de tarea correspondiente del DOM.

