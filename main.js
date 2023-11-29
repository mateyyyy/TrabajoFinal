import prompt from 'prompt-sync';
import TasksList from './task.js';
const promptSync = prompt();

function esperaEnter() {
  prompt('Presione Enter para continuar...');
}

function main() {
  let op, titulo, descripcion, estado;
  const lista = new TasksList();
  lista.addTask('Hola', false);
  lista.addTask('chau', false);
  lista.mostrarTareas();
}

export default main;
