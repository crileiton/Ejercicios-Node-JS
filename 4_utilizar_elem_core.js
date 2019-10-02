/**
 * 'use strict';

var os = require('os');
var fs = require('fs');

var texto = 'Plataforma: ' + os.platform() +
    " \nMemoria Total: " + os.totalmem();
console.log(texto);

fs.writeFile('./archivo.txt', texto, function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("El archivo se creo correctamente");
        console.log("Datos escritos: " + texto);
    }
});
console.log("El proceso terminó");
 * 
 */

'use strict';

var os = require('os');
var fs = require('fs');

var texto = 'Plataforma: ' + os.platform() +
    " \nMemoria Total: " + os.totalmem();
console.log(texto);

fs.writeFile('./archivo.txt', texto, function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("El archivo se creo correctamente");
        console.log("Datos escritos: " + texto);
    }
});
console.log("El proceso terminó");