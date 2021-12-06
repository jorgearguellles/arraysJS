/**
 * El método Join() sirve para unir cada elemento de un array a traves de un separador elegido, puede ser un guión, una coma, vacio, nada, etc
 * 
 */

const elements = ["Fire", "Water", "Air", "Eart"];

let rta = "";
const separator = "--";
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  rta = rta + element + separator
}
console.log("Usando For:", rta);

const rta2 = elements.join(separator);
console.log("Usando Join():", rta2);

// Caso ejemplo de uso

const title = "Curso profesional de estructuras de datos";

const url = title
  .toLowerCase() // Poner cada letra a minuscula
  .split(" ") // Separar el string por palabra y volverlo un array
  .join("-"); // Unir cada elemento del array con un guion medio "-"

console.log(url);
