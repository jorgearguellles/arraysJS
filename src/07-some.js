/* 
El método Some() nos dice si alguno de los elementos cumple la condición
Siempre retorna una: True o False
 */

const numbers = [1,2,3,4,5,6,7,8,9];

/* 
For Way ==================> Evaluaremos si almenos un número es par
*/ 

let rta = false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if(element % 2 === 0){
    rta = true;
    break;
  }
};
console.log("Usando For:", rta);


/* 
Some Way ==================> Evaluaremos si almenos un número es par 
*/ 

let rta2 = numbers.some(element => element % 2 === 0);
console.log("Usando Some():", rta2);
