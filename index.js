'use strict';
//  (1)   Sin parametros, sin valor de retorno
function darSaludo() {
    alert("Hola");
}
//llamamos a la función
darSaludo();


//  (2)   Con parametros, sin valores de retorno 
function saludar(nombre) {
    alert("Hola " + nombre);
}

let nombre = "Bienvenido";
saludar(nombre);


//  (3)   Sin parametros, con valor de retorno
function obtenerNumero() {
    return -98;
}
let numero = obtenerNumero();
alert("El numero obtenido es : " + numero);


//  (4)  Con parametros, con valor de retorno
function sumar(a, b) {
    return a + b;
}
let resultado = sumar(9, 7);
alert("El resultado de la suma es : " + resultado);
let AlturaA = 7;
let result = Arearesult(BaseA,AlturaA );
alert  ("Area total "+Arearesult)

