/**
 * Map es inmutable - no muta los datos originales del array
 * Al usar Map obtenemos un nuevo Array con los elementos mutados
 * Obtenemos el mismmo número de elementos
 * 
 *  */ 

const letters = ["a","b","c"];

//Usando un ciclo For

const newArray = [];
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  newArray.push(element.toUpperCase());
}
console.log("OriginalArray:",letters);
console.log("MutedArray(For):",newArray);

//Usando Map

const lettersMuted = letters.map(element => element.toUpperCase());
console.log("MutedArray(map):",lettersMuted);