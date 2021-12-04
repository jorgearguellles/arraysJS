/**
 * El método includes() verifica si un elemento esta dentro de un array
 * Retorna True o False
 */

const pets = ["dog", "cat", "bat"];

/**
 * For way ===================> Veriricar si el elemento 'dog' esta en el Array
 */
let rta = false;
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if(element === 'dog'){
    rta = true;
    break
  }
}
console.log("Usando For",rta)


/**
 * inludes way ===================> Veriricar si el elemento 'dog' esta en el Array
 */

const rta1 = pets.includes('dog');
console.log("Usando includes():", rta1);