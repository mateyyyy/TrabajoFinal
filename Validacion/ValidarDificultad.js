function validarDificultad(dificultad, promptSync)
{
    while(dificultad<=0 || dificultad>3){
        console.log('Dificultad no valida..');
        dificultad = promptSync('Ingrese la dificultad {1,2,3} : ');
    }
}

export default validarDificultad;