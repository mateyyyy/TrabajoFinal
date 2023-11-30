import Task from "./task.js";
// Programación Orientada a Objetos (POO)
// Clase para poder guardar las Tareas en una lista
class TasksList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(titulo, descripcion, estado, vencimiento, dificultad) {
      this.tasks.push(new Task(titulo, descripcion, estado, vencimiento, dificultad));
    }

    // Funcion pura que recorre la lista de tareas y las muestra
    mostrarTareas() {
      let result = '';
      this.tasks.forEach((task, index) => {
        result += `Tarea ${index + 1}${task.mostrarTarea()}\n`;
      });
      return result;
    }

    // Funcion pura que recorre la lista de tareas y muestra algun estado en especifico
    mostrarTareasEstado(p) {
      let result = '';
      this.tasks.forEach((task, index) => {
        if (task.estado.toLowerCase() === p.toLowerCase()) {
          result += `Tarea ${index + 1}${task.mostrarTarea()}\n`;
        }
      });
      return result;
    }
  
    // Esta funcion pura devuelve true si la lista esta vacia, false si tiene elementos
    estaVacia(){
      return this.tasks.length == 0;
    }
  
    // Funcion pura que recorre la lista comparando el nombre ingresado con el nombre de todas las tareas
    buscarTarea(titulo){
        const tareaEncontrada = this.tasks.find(task => task.titulo === titulo);
        if (tareaEncontrada) {
          return tareaEncontrada.mostrarTarea();
        }
        return 'No se encontro la tarea';
    }
  }
  // Exportamos la clase TaskList para utilizarla en main.js
  export default TasksList;