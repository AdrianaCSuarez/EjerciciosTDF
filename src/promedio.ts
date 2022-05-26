//Algoritmo de promedio

function cargarEstudiantes(): void {
  for (let indice: number = 0; indice < elEstudiante; indice++) {
    arregloEstudiantes[indice] = prompt("Nombre y Apellido del Estudiante");
    notaUno[indice] = Number(prompt("Nota 1"));
    notaDos[indice] = Number(prompt("Nota 2"));
    notaTres[indice] = Number(prompt("Nota 3"));
  }
}
function promedioNotas(): void {
  let promedio: number = 0;
  for (let indice: number = 0; indice < elEstudiante; indice++) {
    promedio = (notaUno[indice] + notaDos[indice] + notaTres[indice]) / 3;
    console.log(
      "Nombre del Estudiante ",
      arregloEstudiantes[indice],
      "promedio",
      promedio
    );
  }
}

let elEstudiante: number = Number(prompt("Ingrese la cantidad de estudiantes"));
let arregloEstudiantes: string[] = new Array(elEstudiante);
let notaUno: number[] = new Array(elEstudiante);
let notaDos: number[] = new Array(elEstudiante);
let notaTres: number[] = new Array(elEstudiante);

cargarEstudiantes();
promedioNotas();
