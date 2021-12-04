/**
 * El método Every() evalua que todos los elementos cumplan la condición
 * Siempre retorna un True o False
 */

const numbers = [1,2,3,4,5];

/* 
For Way ==================> Evaluaremos si cada uno de los elementos (todos) es menor a 6
*/ 

let rta = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if(element >= 6){
    rta = false;
    break;
  } 
}
console.log("Usando For:",rta)


/* 
Some Way ==================> Evaluaremos si cada uno de los elementos (todos) es menor a 6
*/ 

const rta2 = numbers.every( number => number <= 6);
console.log("Usando every():",rta2);
