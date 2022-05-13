//Leer valores del usuario hasta que introduzca un 0
//El usuario puede introducir valores numéricos,
//tanto positivos como negativos
//Contar la cantidad de valores introducidos
//que sean mayores a 0 y el porcentaje de positivos respecto del total

let numero: number = Number(prompt("Ingrese un numero"));
let contadorPositivos: number = 0;
let contador: number = 0;
let porcentajePositivos: number;

while (numero !== 0) {
  if (numero > 0) {
    contadorPositivos = contadorPositivos + 1;
  }
  console.log(numero);
  numero = Number(prompt("ingrese otro numero"));
  if (contadorPositivos > 0) {
    porcentajePositivos = contadorPositivos % 100;
  }
}

console.log("cantidad de numeros ingresados", contador);
console.log("cantidad de numeros ingresados", contadorPositivos);
console.log("porcentaje de positivos", porcentajePositivos);
