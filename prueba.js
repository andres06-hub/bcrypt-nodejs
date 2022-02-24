"use strict";
// import bcrypt from "bcrypt";
const saltRound = 10;
// Obtenesmos el bcrypt
const bcrypt = require('bcrypt');
// Declaramos el password
let pass = "123456";
// mostramos
console.log(pass);
// Procedemos a encriptar el pass
let passBcrypy = bcrypt.hashSync(pass, saltRound);
// Mostramos 
console.log(passBcrypy);
console.log();
// Validamos si el pass es el que fue encriptado
if (bcrypt.compareSync(pass, passBcrypy)) {
    console.log("Credentials successfully");
}
else {
    console.log("Credentials not match");
}
