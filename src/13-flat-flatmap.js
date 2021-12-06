/**
 * El método flat() crea una nueva matriz con todos los elementos de sub-array 
 * concatenados recursivamente hasta la profundidad especificada.
 * 
 * Tiene un parametro opcional, que po defecto es 1.
 * Expresa el nivel de profundidad de qué tan profunda debe aplanarse una estructura de matriz anidada. 
 */

 const arr1 = [1, 2, [3, 4]];
 arr1.flat();
 // [1, 2, 3, 4]
 
 const arr2 = [1, 2, [3, 4, [5, 6]]];
 arr2.flat();
 // [1, 2, 3, 4, [5, 6]]
 
 const arr3 = [1, 2, [3, 4, [5, 6]]];
 arr3.flat(2);
 // [1, 2, 3, 4, 5, 6]

/**
 * El método de aplanar elimina las ranuras vacías en las matrices:
 */

 const arr4 = [1, 2, , 4, 5];
 arr4.flat();
 // [1, 2, 4, 5]

// Cómo aplanaria una matriz

 const matriz = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
 ];

/**
 * For Way ==============>
 */

const matrizPlana = [];
for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i];
  for (let j = 0; j < array.length; j++) {
    // const element = array[j]; 
    const element = matriz[i][j];
    matrizPlana.push(element);
  }
}
console.log("Usando for:", matrizPlana);

/**
 * Flat() Way ==============>
 */

const rta = matriz.flat();
console.log("Usando Flat():", rta);


/**
 * El método flatMap() primero mapea cada elemento usando una función de mapeo, 
 * luego aplana el resultado en una nueva matriz. 
 * Es idéntico a un map seguido de un flatten (en-US)de profundidad 1, 
 * pero flatMap es a menudo útil y la fusión de ambos en un método es ligeramente más eficiente.
 */

 const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
  { userId: 2, username: "Mike", attributes: ["Lovely"]},
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
];

/**
 * Usando map() & flat()
 */
const attributes = users.map(user => user.attributes).flat();
console.log("Usando map() & flat():",attributes);
// [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]

/**
 * Usando flatmap()
 */

const flatMap = users.flatMap(user => user.attributes);
console.log("Usando flatMap():",flatMap);


// Retos: Array de las fechas de inicios de los appoinments

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

const primeryAppointment = calendars.primaryCalendar.flatMap(meet => meet.startDate);
console.log(primeryAppointment);

const secondaryAppointment = calendars.secondaryCalendar.flatMap(meet => meet.startDate);
console.log(secondaryAppointment);

const finalAppointment = [...primeryAppointment, ...secondaryAppointment];
console.log("Final Apponitment:", finalAppointment);