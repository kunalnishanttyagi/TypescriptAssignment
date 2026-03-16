/*
Write a function that takes two numbers as arguments and returns their sum. Ensure the function parameters and return type are annotated.

Complete Below Function

console.log(add(2, 3)); // Output: 5

*/



// function add<T extends number|string>(a:T,b:T):{
//     return a+b;
// }

type addAble=number|string;
function add<T extends number | string>(a: T, b: T): addAble {
  let result:addAble;
  if(typeof a==="number" && typeof b==="number"){
    return a+b;
    // result=a+b;
  }
  else if(typeof a==="string" && typeof b==="string"){
    // result= a+b;
    return a+b;
  }
  else{
    throw new Error("problem");
  }
  // return result;
}

console.log(add(23,32));

// function add<T extends number>(a:T,b:T):T{

//     return a+b as T;

// }


// console.log(add(2,3));


