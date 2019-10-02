'use strict';

function sumar(n1, n2){

    return n1 + n2;
}

function restar(n1, n2){

    return n1 - n2;
}

function multiplicar(n1, n2){

    return n1 * n2;
}

function dividir(n1, n2){

    if (n2 == 0){

        return "Imposible el segundo número no puede ser 0"
    }
    else{

        return n1 / n2;
    }
    
}

// Exportando funciones

exports.adicion = sumar;
exports.sustraccion = restar;
exports.multiplicacion = multiplicar;
exports.division = dividir;

