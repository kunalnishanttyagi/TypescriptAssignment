/*

Description

const obj = { a: 1, b: 'hello', c: true };
const updated = updateObject(obj, 'b', 'world');
Function that takes object as first parameter and second parameter of take only keys of the object provided. Also value type should be same as the original

*/

// lets make the function


const obj = { a: 1, b: 'hello', c: true };

function updateObject<T,U extends keyof T>(obj:T,key:U,value:T[U]):T{
  // now lets update array
  let ans={} as T;
  for(let i in obj){
    if(key as string===i){
      ans[key]=value;
    }
    else{
      ans[i]=obj[i];
    }
  }
  return ans as T;
}

console.log(updateObject(obj,"a","34"))