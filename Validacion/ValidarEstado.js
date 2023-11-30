function validarEstado(estado)
{
    while(estado.toLowerCase()!='p' && estado.toLowerCase()!='e' && estado.toLowerCase()!='t')
    {
        console.log('Valor incorrecto, ingrese nuevamente....');
        estado = promptSync(`Ingrese el estado : [P]endiente, [E]n curso, [T]erminada : `);
    }
}
export default validarEstado;