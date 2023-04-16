const message = (age, callback) => {
    const userAge = age
    if (isNaN(userAge)) {
        const errorMessage = console.log("ERROR: La edad debe ser un numero")
        return errorMessage;
    }
    else { 
        return callback(userAge)  
    }
}
let welcome = (age) => { 
    if(age >= 18) {
        const welcomeMessage = console.log("Tienes mas de 18 años, eres bienvenido al club")
        return welcomeMessage;
    }
    else { 
        const notWelcomeMessage = console.log("Tienes menos de 18 años, NO eres bienvenido")
        return notWelcomeMessage;
    }
}
//La funcion message va seguida de una edad y una funcion callback, en este caso un mensaje de bienvenida al club si es mayor o igual de 18 años.
message("11", welcome);

module.exports.message = message;
module.exports.welcome = welcome;