const Validation = (userData) => {
    const error = {}
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2-4}$/i.test(userData.email)) {
        error.email = "El email no es valido"
    }
    if (!userData.email) {
        error.email = "Debe ingresar email"
    }
    if (userData.email.length > 35) {
        error.email = "El email no puede tener mas de 35 caracteres"
    }
    if(!/.*\d+.*/.test(userData.password)) {
        error.password = "La contraseña debe tener por lo menos 1 numero"
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        error.password = "La contraseña debe tener entre 6 y 10 caracteres"
    }
    return error

}

export default Validation