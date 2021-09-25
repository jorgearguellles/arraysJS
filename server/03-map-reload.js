/**
 * Map es inmutable - no muta los datos originales del array
 * Al usar Map obtenemos un nuevo Array con los elementos mutados
 * Obtenemos el mismmo número de elementos
 * 
 *  */ 

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
];
console.log("Original:",orders);

//Filtrar o seleccionar datos
const rta1_name = orders.map(item => item.customerName);
const rta1_total = orders.map(item => item.total);
const rta1_delivered = orders.map(item => item.delivered);

console.log("Names",rta1_name, "isDelivered:",rta1_delivered);
console.log("Totals:",rta1_total);

//Añadir un nuevo elemento en cada objeto sin mutar el array original

// const rta2 = orders.map(item => {
//   item.tax = 0.19;
//   return item; //Aquí estamos mutando la referencia en memoría del objeto. Mala práctica
// });
// console.log("Original:",orders)
// console.log("rta2:",rta2);

// Así se puede agregar un atributo a cada objeto del array, sin mutar la referencia en memoría de dicho objeto
const rta3 = orders.map(item => {
  return {
    ...item, //Aquí copiamos cada elemento
    tax: 0.19 //Aquí le agregamos ese nuevo atributo a la copia de cada objeto del aray. Así no mutamos la referencia en memoria
  };
});
console.log("Original:",orders)
console.log("rta3:",rta3);




