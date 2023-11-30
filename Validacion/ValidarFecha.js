function validarFecha(vencimiento) {
    const fechaActual = new Date();
    const expirationDate = new Date(vencimiento);

    // Compare expirationDate with today's date
    if (expirationDate < fechaActual) {
        return false; // Fecha invalida
    } else {
        return true; // Fecha valida
    }
}

export default validarFecha;