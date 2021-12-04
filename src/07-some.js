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

/* 
Ejerciciso ==================> Evaluaremos si se nos cruza un compormiso para agendar o no
Vamos a instalar una librería llamda dat-fns para trabajar con las fechas
*/ 
console.log("Ejerciciso de las fechas ==================>")
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 19),
  endDate: new Date(2021, 1, 1, 20, 30),
};

const isOverlap = (newAppointment) => {
  return dates.some( date => {
    return areIntervalsOverlapping(
      {start: date.startDate, end: date.endDate},
      {start: newAppointment.startDate, end: newAppointment.endDate}
    )
  })
}

console.log( "Se sobre pone:",isOverlap(newAppointment));
