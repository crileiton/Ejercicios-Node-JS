// server.js

// Se utiliza modo estricto para escribir un buen código.
'use strict';

console.log('Hola mundo desde NodeJS');

console.log(3 + 8);

setInterval(miFuncion,1000);

function miFuncion(){

    console.log("Esta es la fecha: " + new Date());

}
 


setInterval(
    () => {
        console.log("Esta es la fecha-hora - otra forma: " + new Date());
    }
    , 1000
);