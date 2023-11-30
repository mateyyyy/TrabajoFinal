function editarTarea(lista, promptSync, op) {
    let titulo, descripcion, estado;
    console.log('Si no desea editar el atributo presione enter...');
    titulo = promptSync('Ingrese el nuevo titulo : ');
    if (titulo !== '') {
        lista.tasks[op - 1].titulo = titulo;
    }

    descripcion = promptSync('Ingrese la nueva descripcion : ');
    if(descripcion!=''){
        lista.tasks[op-1].descripcion = descripcion;
    }

    estado = promptSync(`Ingrese el estado : [P]endiente, [E]n curso, [T]erminada : `);

    // Hace un control sobre el estado
    if(estado!=''){
        while(estado.toLowerCase()!='p' && estado.toLowerCase()!='e' && estado.toLowerCase()!='t')
        {
            console.log('Valor incorrecto, ingrese nuevamente....');
            estado = promptSync(`Ingrese el estado : [P]endiente, [E]n curso, [T]erminada : `);
        }
        lista.tasks[op-1].estado = estado;
    }

    let vencimiento = promptSync('Ingrese la fecha de vencimiento : ');
    if(vencimiento!=''){
        lista.tasks[op-1].vencimiento = vencimiento;
    }

    let dificultad = promptSync('Ingrese la dificultad [1,2,3]: ');
    if(dificultad!=''){
        lista.tasks[op-1].dificultad = dificultad;
    }
  }

  export default editarTarea;