import validarEstado from "../Validacion/ValidarEstado.js";
import validarFecha from "../Validacion/ValidarFecha.js";
import validarDificultad from "../Validacion/ValidarDificultad.js";

function agregarTarea(lista, promptSync){
    var titulo, descripcion, estado;
    // Pide que ingrese las propiedades de la tarea
    titulo = promptSync('Ingrese el titulo : ');
    descripcion = promptSync('Ingrese la descripcion : ');
    estado = promptSync(`Ingrese el estado : [P]endiente, [E]n curso, [T]erminada : `);
    // Hace un control sobre el estado
    validarEstado(estado);
    let vencimiento = promptSync('Ingrese el vencimiento YYYY/MM/DD : ');
    while(!validarFecha(vencimiento))
    {
        console.log('Fecha no valida..');
        vencimiento = promptSync('Ingrese el vencimiento YYYY/MM/DD : ');
    }
    let dificultad = promptSync('Ingrese la dificultad {1,2,3} : ');
    validarDificultad(dificultad, promptSync);

    // Agrega la tarea con las propiedades ingresadas por el usuario
    lista.addTask(titulo, descripcion, estado, vencimiento, dificultad);
  }

  export default agregarTarea;