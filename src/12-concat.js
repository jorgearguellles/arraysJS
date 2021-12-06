/**
 * El método concat() sirve para fucionar Arrays
 * Concat() es un método inmutable, es decir, no modifica los array originales, sino que genera un array nuevo
 */

const array1 = [1,2,3,4,5];
const array2 = [6,7,8,9,10];

let array3 = array1; // Genera referencia en Memoria - No recomendable usar, a menos que sea intencional
let array4 = [...array1]; // No genera referencia en memoria, solo genera una copia pura
for (let index = 0; index < array2.length; index++) {
  const element = array2[index];
  array4.push(element);
}
console.log("Usando For:", array4);

const array5 = array1.concat(array2);
console.log("Usando contact():", array5);

/**
 * Otra forma de concatenar dos o más arrays es usando el Spread Operator
 * El Spread Operator trabaja bien solamente con los Arrays
 * Si le enviamos un String usando el Sprad <operator, lo que sucede es que me concatena cada letra del String en el nuevo Array
 */

 const array6 = [...array1, ...array2];
 console.log("Usando Spread Operator:", array6);

 /**
  * Si quiero modifica el Array Original, se puede hacer así: ========================
  */

 array1.push(array2); 
 console.log(array1);
 /* 
 Lo anterior inserta el segundo array en la última posición del primer Array: 
 [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ] ]
 */

 array1.push(...array2); 
 console.log(array1);
 /* 
 Lo anterior inserta cada elemento del segundo array en el primer Array: 
 [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
 */