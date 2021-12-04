/**
 * Reuce():
 * - Reduce a un solo valorno devuelve otro array, simplemente un valor.
 * Se utiliza muchísimo para hacer cálculos a partir de la información de un array.
 * - Reduce recibe dos argumentos:
 *  - El primero es la operacióñn a realizar, en este caso sumar
 *  - El segundo argumento es el estadoinciail del acumulador
 */

const nums = [1,2,3,4];

const respuesta = nums.reduce( (acumulador, elemento) => acumulador+elemento, 0 );
console.log("Reduce:",respuesta);
