// 4.1 Un profesor tiene un salario inicial de $1500, y recibe un incremento
// de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6
// años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el
// algoritmo y represente la solución mediante el diagrama de flujo, el
// pseudocódigo y el diagrama N/S, utilizando el ciclo apropiado.

let salario = 1500;
let i = 0;

while (i < 6){
    salario = salario + salario*0.1;
    console.log(`salario Nro ${i+1} es ${salario} soles`);
    i = i + 1;
}

