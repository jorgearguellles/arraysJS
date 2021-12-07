/**
 * El método Sort() sirve para ordenar los elementos de un Array
 * Sort() es un método que muta el Array original
 * 
 */


const months = ["March", "Jan", "Feb", "Dec"];
const rta = months.sort(); // Lo ordena según ASCII
console.log("Meses ASCII:",rta)

const numbers = [1, 30, 4, 21, 100000];
const rta1 = numbers.sort((a,b) => a - b); // Lo ordena según es peso de cada elemento del Array: Menor a Mayor
console.log("Números Menor a Mayor:",rta1);
const rta2 = [...numbers].sort((a,b) => b - a); // Lo ordena según es peso de cada elemento del Array: Mayor a Menor
console.log("Números Mayor a Menor:",rta2);

const words = [ "réservé", "premier", "communiqué", "café", "adieu", "éclair", "banana"];

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

const rta4 = orders.sort((a,b) => a.total - b.total); // Lo ordena según es peso de cada elemento del Array: Menor a Mayor
console.log("Números Menor a Mayor:",rta4);
