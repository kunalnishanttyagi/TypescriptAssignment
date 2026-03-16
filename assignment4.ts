/*

Write a function that takes an array of numbers and returns a new array where each number is doubled. Use TypeScript to define the function's parameter and return type.

console.log(doubleArray([1, 2, 3]));
Output: [2, 4, 6]

*/




function doubleArray<T extends number>(args:T[]):T[]{
  let result:T[]=[];
    args.forEach((ele)=>{
      
      result.push(ele*2 as T);
      // ele*=2;
    })
    return result;
  
}

console.log(doubleArray([1,2,3,4]))
// console.log(doubleArray(["helo",23,23]))

// function doubleArray<T extends number[]>(arr:T):T{
//     arr.forEach((num,index)=>{
//         arr[index]=num*2;
//     })
//     return arr;
// }



// console.log(doubleArray([1,2,3,4]));