import TasksList from './Clases/TasksList.js';
import prompt from 'prompt-sync';
import verTarea from './Funciones en Tareas/verTarea.js';
import agregarTarea from './Funciones en Tareas/agregarTarea.js';
const promptSync = prompt();

// Espera a que el usuario presione una tecla para continuar
function esperaEnter() {
  promptSync('Presione Enter para continuar...');
}

function interfaz(){
  return `
    ==============================
              TO-DO List
    ==============================
   
    1. Ver tareas.
    2. Buscar una tarea.
    3. Agregar una tarea.
    0. Salir.
    `;
}

// Funcion principal a ejecutar
function main() {
  var op, titulo, descripcion, estado;
  // Genero la lista de 
  const lista = new TasksList();
  do
    {
      process.stdout.write('\x1B[2J\x1B[0f');
      // Limpia la consola
      console.log(interfaz());
      // Despliega menu de opciones
      op = promptSync('Ingrese una opcion : ');
      // Registra la opcion ingresada por el usuario
      process.stdout.write('\x1B[2J\x1B[0f');
      switch(op)
      {
        case '1':
          // Comprueba que la lista no este vacia
          if(lista.estaVacia()){
            console.log('No hay tareas...');
          }
          else
          {
            verTarea(lista, promptSync);
          }
          esperaEnter();
        break;

        case '2':
          // Comprueba que la lista no este vacia
          if(!lista.estaVacia()){
              // En caso de que no este vacia registra el nombre de la tarea a buscar
              titulo = promptSync('Escriba el nombre de la tarea : ');
              console.log(lista.buscarTarea(titulo));
          }
          else
          {
              console.log('No hay tareas cargadas...');
          }
          esperaEnter();
        break;

        case '3':
          // Agrega una tarea
          agregarTarea(lista, promptSync);
        break;
      }
    }
    while(op!=0);
    console.log('Hasta la proxima!');
};

// Exporta la funcion main para ejecutarla en index.js
export default main;
