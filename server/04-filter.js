/**
 * filter() lo que hace es filtrar el array original en base a una condición.
 * Filter no cambia los elementos originales
 * Crean un array nuevo con los elementos qué cumplan con una condición
 * Por lo tanto filter() es inmutable y el nuevo array creado solamente puede contener:
 * - cero coincidencias
 * - todas coincidencias algunas coincidencias
 * - Pero nunca más coincidencias que el tamaño del array original.
 */

const words = ["Jorge", "Spray", "RellowRed", "Greenland"];
console.log("Array Original:",words);
//Filtro aplicando un ciclo For
const filter = [];
for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if(element.length > 5){
    filter.push(element)
  }
}
console.log("Usando For:",filter);

// Filtro usando Filter();
const rta = words.filter(item => item.length > 5);
console.log("Usando Filter():",rta);


// EJEMPLO --------

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
  {
    customerName: "Nicolas",
    total: 360,
    delivered: false,
  }
];


const rta1 = orders.filter(item => item.delivered);
console.log("Elementos qué cumplen la condición:",rta1);

const rta2 = orders.filter(item => item.delivered && item.total > 100);
console.log("Elementos qué cumplen dos condición:",rta2);

//Un buscador:

const search = (query) => {
  return orders.filter(item => {
    return item.customerName.includes(query);
  })
}

console.log("Ordenes de Nicolas:",search("Nico"));
console.log("Ordenes de A:",search("a"));