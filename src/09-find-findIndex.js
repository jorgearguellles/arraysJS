/**
 * Find() es similar al método Filter(), con la excepción de que:
 * El método Fin() solo va a retornar un Objeto {} que cumpla con la condición
 * Solo retorna un solo elemento, el primer elemento que coincide con la condición
 * Si ningun elemento coincide con la condición, retorna un Undefined
 */

const numbers = [1,30,49,29,10,13];

/* 
For Way ==================> 
*/ 

let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if( element === 13){
    rta = element;
    break;
  }
}
console.log("Usando For:",rta)

/* 
find() Way ==================> 
*/ 

const rta2 = numbers.find( element => element === 300);
console.log("Usando find():",rta2)

/**
 * Ejercisio
 */

 const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const rta3 = products.find( item => item.id === '🍕');
console.log("Encontrado la comida con Find():",rta3)
const rta3a = products.find( item => item.id === '🫒');
console.log("Encontrado la comida con Find():",rta3a)

/**
 * El método FinIndex() solo va a retornar la posición del elemento que cumpla con la condición
 * Si ningun elemento coincide con la condición, retorna un -1, es decir, -1 === el elemento no esta
 */

const rta4 = products.findIndex( item => item.id === '🍕');
console.log("Encontrado el index con findIndex():",rta4)
const rta5 = products.findIndex( item => item.id === '🫒');
console.log("Encontrado el index con findIndex():",rta5)
