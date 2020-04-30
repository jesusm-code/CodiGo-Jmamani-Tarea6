// 4.3 Se requiere un algoritmo para determinar, de N cantidades, cuántas
// son cero, cuántas son menores a cero, y cuántas son mayores a cero.
// Realice el diagrama de flujo, el pseudocódigo y el diagrama N/S para
// representarlo, utilizando el ciclo apropiado.
let cantidades = [-1, 0, 1, 2, 3, 4, 5, 8, 9, -8];
let cantidadCero = 0;
let cantidadNeg = 0;
let cantidadPos = 0;
let i = 0;

while (i < cantidades.length){
    if (cantidades[i] == 0){
        cantidadCero = cantidadCero + 1;
    }else if (cantidades[i] < 0){
        cantidadNeg = cantidadNeg + 1;
    }else{cantidadPos = cantidadPos + 1;}
    i= i+1;
}
console.log(cantidades);
console.log(`Cantidad de ceros: ${cantidadCero}`);
console.log(`Cantidad de Negativos: ${cantidadNeg}`);
console.log(`Cantidad de Positivos: ${cantidadPos}`);
