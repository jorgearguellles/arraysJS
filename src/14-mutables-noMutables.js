const products = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

let misProductos = [];

console.log("Estado ========= 0");
console.log("Productos:", products);
console.log("Mis productos:", misProductos)

// 1. Buscar un producto en especifico
const producto = products.find( p => p.id === '🍔');
if(producto){
  misProductos.push(producto);
}
console.log("Estado ========= 1");
console.log("Productos:", products);
console.log("Mis productos:", misProductos)
// { title: 'Burger', price: 121, id: '🍔' }

// 2. Agregar un producto a MiProductos y elininarlo de la lista de productos
const productoIndex = products.findIndex( p => p.id === '🍔');
if(productoIndex !== -1){
  [...misProductos].push(products[productoIndex]);
  products.splice(productoIndex,1);
}

console.log("Estado ========= 2");
console.log("Productos:", products);
console.log("Mis productos:", misProductos)

// 3. Eliminación de un array sin mutar el Original


console.log("Estado ========= 3");
console.log("Productos:", products);
console.log("Mis productos:", misProductos)