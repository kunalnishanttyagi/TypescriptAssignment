/*
Create a function that takes a parameter which can either be a string or a number. The function should return the parameter as a string.

Complete stringify method :

console.log(stringify(123));
Output: "123"

console.log(stringify('hello'));
Output: "hello"

*/


type StringAble=number|string;

function stringify<T extends StringAble>(arg:T):string{
  if(typeof arg==="number") return String(arg);
  else return arg;
}

console.log(stringify(4234234));
console.log(stringify("hello"))








// function stringify<T extends number|string>(param:T):string{

//     if(typeof param==="number") return String(param);
//     else return param

// }



// console.log(stringify(12345));

// console.log(stringify('hello'));





