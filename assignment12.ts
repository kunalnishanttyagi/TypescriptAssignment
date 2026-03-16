/*


Just like the how array.map works create mapper function for object which takes in the object and callback function to update every value.

Challenges
1. Return type of function should be same as object constant used with updated value type
2. Get the item type from the sent object value when passing callback
3. Type check -> Object type to be used as parameter should be of same property value

const originalObject = { a: 1, b: 2, c: 3 };
const mappedObject = mapObject(originalObject, (value) => value.toString());
MappedObject should be and have same type

{ a: '1', b: '2', c: '3' }
Advance challenge: Retain the key type also.

*/

// SO HERE   i will have a obj and a callback function 
// 

// type funcType<T>={
//   T extends (...args:)
// }

type objValueType<T>={
  [K in keyof T]:T[K]
}


// type funcType=(arg:number|string):string;
function mapObject<T,U>(obj:T,callback:(arg:T[keyof T])=>U):{[K in keyof T]: U}{
  // now i have to traverse 
  let newObj={} as {[K in keyof T]:U};
  for(let key in obj){
    newObj[key]=callback(obj[key]);
  }
  return newObj;
}


const originalObject = { a: 1, b: 2, c: 3 };
const mappedObject = mapObject(originalObject, (value) => value.toString());
console.log(mappedObject);