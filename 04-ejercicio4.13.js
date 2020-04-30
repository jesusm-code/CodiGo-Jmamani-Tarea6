// 4.13 Un vendedor ha realizado N ventas y desea saber cuántas fueron
// por 10,000 o menos, cuántas fueron por más de 10,000 pero por
// menos de 20,000, y cuánto fue el monto de las ventas de cada una y
// el monto global. Realice un algoritmo para determinar los totales.
// Represente la solución mediante diagrama de flujo, pseudocódigo y
// diagrama N/S.
let ventas = [100, 200, 300, 400, 500, 10000, 10000, 10000, 10000, 20000];
let cantidadMenores = 0;
let cantidadMayores = 0;
let montoMenores = 0;
let montoMayores = 0;

let i = 0;

while (i < ventas.length){
    if (ventas[i] < 10000){
        cantidadMenores = cantidadMenores + 1;
        montoMenores = montoMenores + ventas[i]
    }else {
        cantidadMayores = cantidadMayores + 1;
        montoMayores = montoMayores + ventas[i]
    }
    i= i+1;
}
console.log(ventas);
console.log(`Cantidad de ventas menores: ${cantidadMenores}`);
console.log(`Monto de ventas Menores: ${montoMenores}`);
console.log(`Cantidad de ventas mayores: ${cantidadMayores}`);
console.log(`Monto de ventas Mayores: ${montoMayores}`);
console.log(`ventas Total: ${montoMayores + montoMenores}`);