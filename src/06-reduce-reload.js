//  Usando reduce encuentra cuantas veces se repite un número N y lo agrupas en un objeto

const nums = [1,5,2,3,9,1,2,2,3,3,4,4,5,6,6,7,8,8,9,9,9,];

const respuesta = nums.reduce( (obj,item) => {
  if(!obj[item]){
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
} , {})

console.log(respuesta);

// usando reduce encuentra cuantos números hay por rango 
// 1-5, 6-8, 9-10

const arr = [3, 10, 9, 4, 3, 1, 8, 4, 7, 6,11,12];

const result = arr.reduce((obj, item) => {
  if (item <= 5) {
    obj['Entre 1 y 5']++
  } else if (item <= 8) {
    obj['Entre 6 y 8']++
  } else if (item <= 10){
    obj['Entre 9 y 10']++
  } else {
    obj[item] = "Número fuera de los rangos"
  }
  return obj
}, {
  'Entre 1 y 5': 0,
  'Entre 6 y 8': 0,
  'Entre 9 y 10': 0
})

console.log(result)
