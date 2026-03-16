/*

Define an interface Person with properties name (string) and age (number). Then, create a function that takes a Person object and returns a string in the format: "Name: <name>, Age: <age>".

Complete describePerson Function :

console.log(describePerson({ name: 'Alice', age: 30 }));

Expected Output: "Name: Alice, Age: 30"

*/



interface Person{
  name:string;
  age:number;
}
const person:Person={
  name:"nishant",
  age:20
}
function printPerson<T extends Person>(person:T){
  return `Name: ${person.name}, Age: ${person.age}`;
}

console.log(printPerson(person));












// interface Person{
//     name:string,
//     age:number
// }

// function describePerson<T extends Person>(person: T):string{
//     return `Name: ${person.name}, Age: ${person.age}`;
// }

// let person:Person={
//     name:"Nishant",
//     age:20
// }
// console.log(describePerson(person));