// Programación Orientada a Objetos (POO)
class Task {
  // Definición de una clase con propiedades y método constructor
  titulo = '';
  descripcion = '';
  estado = '';
  vencimiento = '';
  dificultad = 0;


  constructor(titulo, descripcion, estado, vencimiento, dificultad) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.estado = estado;
    this.vencimiento = vencimiento;
    this.dificultad = dificultad;
  }

  mostrarTarea(){
    console.log('Titulo : ', this.titulo);
    console.log('Descripcion : ', this.descripcion);
    console.log('Estado : ', this.estado);
    console.log('Vencimiento : ', this.vencimiento);
    console.log('Dificultad : ', this.dificultad);
  }
}

// (POO)
class TasksList {
  constructor() {
    this.tasks = [];
  }

  addTask(titulo, descripcion, estado, vencimiento, dificultad) {
    this.tasks.push(new Task(titulo, descripcion, estado, vencimiento, dificultad));
  }

  mostrarTareas() {
    // Iteración sobre la lista de tareas, parte de la programacion estructurada
    for (let i = 0; i < this.tasks.length; i++) {
      console.log('Tarea ', i+1);
      console.log(this.tasks[i].mostrarTarea());
      console.log('');
    }
  }

  estaVacia(){
    return this.tasks.length == 0;
  }

  buscarTarea(titulo){
    for (let i = 0; i < this.tasks.length; i++) {
      if(this.tasks[i].titulo == titulo){
        this.tasks[i].mostrarTarea();
        console.log('');
      }
    }
  }
}

// Programación Orientada a Objetos (OOP)
export default TasksList;
