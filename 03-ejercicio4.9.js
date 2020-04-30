// 4.9 Un cliente de un banco deposita equis cantidad de pesos cada mes
// en una cuenta de ahorros. La cuenta percibe un interés fijo durante
// un año de 10 % anual. Realice un algoritmo para determinar el total
// de la inversión final de cada año en los próximos N años. Represente
// la solución mediante el diagrama de flujo, el pseudocódigo y
// diagrama N/S.

let deposito = 1000;
let i = 0;
let year = 10;
while (i < year){
    deposito = deposito + deposito*0.1;
    i = i + 1;
}
console.log(`inversion final en ${year} años es: ${deposito}`);
