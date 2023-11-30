// Programación Orientada a Objetos (POO)
// Clase para guardar una tarea
class Task {
  // Atributos de las tareas
  _titulo = ''; //Uso de un guion bajo para indicar propiedad privada
  _descripcion = '';
  _estado = '';
  _vencimiento = '';
  _dificultad = 0;

  // Constructor
  constructor(titulo, descripcion, estado, vencimiento, dificultad) {
    this._titulo = titulo;
    this._descripcion = descripcion;
    this._estado = estado;
    this._vencimiento = vencimiento;
    this._dificultad = dificultad;
  }

  // Getter y setter para 'titulo'
  get titulo() {
    return this._titulo;
  }

  set titulo(nuevoTitulo) {
    this._titulo = nuevoTitulo;
  }

  // Getter y setter para 'descripcion'
  get descripcion() {
    return this._descripcion;
  }

  set descripcion(nuevaDescripcion) {
    this._descripcion = nuevaDescripcion;
  }

  // Getter y setter para 'estado'
  get estado() {
    return this._estado;
  }

  set estado(nuevoEstado) {
    this._estado = nuevoEstado;
  }

  // Getter y setter para 'vencimiento'
  get vencimiento() {
    return this._vencimiento;
  }

  set vencimiento(nuevoVencimiento) {
    this._vencimiento = nuevoVencimiento;
  }

  // Getter y setter para 'dificultad'
  get dificultad() {
    return this._dificultad;
  }

  set dificultad(nuevaDificultad) {
    this._dificultad = nuevaDificultad;
  }

  // Funcion pura para mostrar las tareas individuales
  mostrarTarea(){
    return `
      Título : ${this.titulo}
      Descripción : ${this.descripcion}
      Estado : ${this.estado}
      Vencimiento : ${this.vencimiento}
      Dificultad : ${this.dificultad}
    `;
  }
}
export default Task;
