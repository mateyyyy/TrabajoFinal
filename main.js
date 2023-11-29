import TasksList from './task.js';
import prompt from 'prompt-sync';
const promptSync = prompt();

function esperaEnter() {
  promptSync('Presione Enter para continuar...');
}

function menu(){
  console.log(`
    ==============================
              TO-DO List
    ==============================
   
    1. Ver tareas.
    2. Buscar una tarea.
    3. Agregar una tarea.
    0. Salir.
    `);
}

function main() {
  var op, titulo,descripcion, estado;
  const lista = new TasksList();
  do
    {
        process.stdout.write('\x1B[2J\x1B[0f');
        menu();
        op = promptSync('Ingrese una opcion : ');
        process.stdout.write('\x1B[2J\x1B[0f');
        switch(op)
        {
            case '1':
                if(lista.estaVacia()){
                  console.log('No hay tareas...');
                }
                else
                {
                  lista.mostrarTareas();
                }
                esperaEnter();
            break;


            case '2':
                if(!lista.estaVacia()){
                    titulo = promptSync('Escriba el nombre de la tarea : ');
                    lista.buscarTarea(titulo);
                }
                else
                {
                    console.log('No hay tareas cargadas...');
                }
                esperaEnter();
            break;


            case '3':
                titulo = promptSync('Ingrese el titulo : ');
                descripcion = promptSync('Ingrese la descripcion : ');
                estado = promptSync(`Ingrese el estado : [P]endiente, [E]n curso, [T]erminada : `);
                while(estado.toLowerCase()!='p' && estado.toLowerCase()!='e' && estado.toLowerCase()!='t')
                {
                    console.log('Valor incorrecto, ingrese nuevamente....');
                    estado = promptSync(`Ingrese el estado : [P]endiente, [E]n curso, [T]erminada : `);
                }
                let vencimiento = promptSync('Ingrese el vencimiento YYYY/MM/DD : ');
                let dificultad = promptSync('Ingrese la dificultad {1,2,3} : ');
                lista.addTask(titulo, descripcion, estado, vencimiento, dificultad);
            break;
        }
    }
    while(op!=0);
    console.log('Hasta la proxima!');
};


export default main;
