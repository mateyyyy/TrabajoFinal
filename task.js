//PARA LA DEFINICION DE LAS TAREAS USO EL PARADIGMA ORIENTADO A OBJETOS POR QUE 

class Task {
  titulo = '';
  descripcion = '';
  status = false;

  constructor(titulo, descripcion, status) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.status = status;
  }
}

class TasksList {
  constructor() {
    this.tasks = [];
  }

  addTask(titulo, descripcion, status) {
    this.tasks.push(new Task(titulo, descripcion, status));
  }

  mostrarTareas()
  {
    for (let i = 0; i < this.tasks.length; i++) {
      console.log(this.tasks[i].titulo);
    }
  }
}

export default TasksList;