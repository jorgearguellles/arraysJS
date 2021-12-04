const letter = ["a","b","c"];

//Usando el Ciclo For:
for (let index = 0; index < letter.length; index++) {
  const element = letter[index];
  console.log("For:",element);
}

//Usando el ForEach:
letter.forEach(element => {
  console.log("ForEach:",element);
});
