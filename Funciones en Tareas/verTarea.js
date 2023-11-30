import editarTarea from './editarTarea.js'
function verTarea(lista, promptSync){
    console.log(`¿Que tarea desea ver?
              [1] Todas
              [p] Pendientes
              [e] En curso
              [t] Terminadas
              [0] Volver`);
              let op = promptSync('Opcion : ');
              process.stdout.write('\x1B[2J\x1B[0f');
              console.log("  ----------------\n  Lista de Tareas\n  ----------------");
              switch(op){
                case '1':
                  //Muestra todas las tareas
                  console.log(lista.mostrarTareas());
                break;
  
                default:
                  //Muestra tareas con estados especificos
                  console.log(console.log(lista.mostrarTareasEstado(op)));
                break;
              }
              console.log('Si desea editar alguna tarea ingrese el numero, 0 para salir...');
              op = promptSync('Opcion : ');
              if(op!=0 && op<=lista.tasks.length)
              {
                editarTarea(lista, promptSync, op);
              }
              else if(op>lista.tasks.length){
                console.log('Tarea inexistente..');
              }
              else if(op==0){
                console.log('Volviendo al menu...');
              }
  }
  export default verTarea; 
