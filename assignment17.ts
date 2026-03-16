/*

description

Description

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };
const merged = deepMerge(obj1, obj2);
Merged should have type { a: number; b: { c: number; d: number; }; e: number; }

Challenge1: If object have a same key with different value type, then it should persist the type of second object key value which is passed as parameter
Challenge2: Give type error if not of same primitive type.

*/

// lets make the function


function deepMerge<T extends object,U extends object,R>(obj1:T,obj2:U):T|U{
  let ans:any={...obj1};
  for(let i in obj2){
    if(i in obj1){
      // if key in obje then merge else 
      let tempVar=(obj1 as any)[i];
      // let tempVar:any=obj1[i as keyof T];
      if(typeof obj2[i]===typeof tempVar){
        ans[i]={...tempVar,...obj2[i]};
      }
      else ans[i]=obj2[i];
    }
    else{
      ans[i]=obj2[i];
    }
  }
  return ans;
}


const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };

const merged = deepMerge(obj1,obj2);
console.log(merged);

