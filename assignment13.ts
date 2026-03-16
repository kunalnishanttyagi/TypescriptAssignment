/*


Description

After reversing the array is should have exact reverse type

const arr = [42, 'hello', true];
const reversedTuple = reverseTuple(tuple);
ReversedTuple should be [boolean, string, number]

Challenges1 : Define the const arr using the type
Challenges2 : Define the const arr using without type

*/


// so here i have to reverse the array

// challenge 1 is here i gave the types
function reverseTuple<T extends any[]>(tuple:T):T{
  let ans=[];
  for(let i=tuple.length-1;i>=0;i--){
    ans.push(tuple[i]);
  }
  return ans as T;
}

const tuple = [42, 'hello', true];
const reversedTuple = reverseTuple(tuple);

console.log(reversedTuple);

