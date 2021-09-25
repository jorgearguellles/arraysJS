/**
 * Filter no cambia los elementos originales
 * Crean un array nuevo con los elem,entos qué cumplan con la condición
 * Nunca retorna más elementos qué el array original, igual o menos cantidad, hasta cero
 */

const words = ["Jorge", "Spray", "RellowRed", "Greenland"];

//Filtro aplicando un ciclo For
const filter = [];
for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if(element.length > 5){
    filter.push(element)
  }
}
console.log(filter);