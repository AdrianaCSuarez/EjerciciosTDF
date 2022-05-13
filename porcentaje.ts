let numero: number = Number(prompt("Ingrese un numero"));
let contadorP: number = 0;
let contador: number = 0;
let porcentajeP;
number;

while (numero !== 0) {
  if (numero > 0) {
    contadorP = contadorP + 1;
  }
  console.log(numero);
  numero = Number(prompt("ingrese otro numero ¿"));
}
console.log("cantidad de numeros ingresados", contador);
console.log("cantidad de numeros ingresados", contadorP);
console.log("porcentaje de positivos", porcentajeP);
