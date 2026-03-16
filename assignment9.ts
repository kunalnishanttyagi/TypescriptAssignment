/*



Function that will take first parameter a object and second one a object with new properties name to be updated. When it typing the second argument it should give suggestion.

const user = {
    firstName: "Tony";
    lastName: "Stark";
    age: 54;
}

const transformUser = transformKeys(user, { firstName: 'first', lastName: 'last' })
Should give return type as

{
    first: string;
    last: string;
    age: number;
}


*/

type User={
  firstName:string;
  lastName:string;
  age:number;
}

let user = {
    firstName: "Tony",
    lastName: "Stark",
    age: 54
}

function changeKeys<T>(obj:T,updateObj:Partial<T>):void{
  // create a new object and put values in it and return it
  let newObj={} as T;
  for(let key in obj){
    if(key in updateObj){
      let newKey=updateObj[key];
      newObj[updateObj[key] as keyof T]=obj[key];
    }
    else{
      newObj[key]=obj[key];
    }
  }
  // return newObj;
}

console.log(changeKeys(user,{firstName:"first",lastName:"last"}));
// console.log(user);











// /*
// Description

// Function that will take first parameter a object and second one a object with new properties name to be updated. When it typing the second argument it should give suggestion.

// const user = {
//     firstName: "Tony";
//     lastName: "Stark";
//     age: 54;
// }

// const transformUser = transformKeys(user, { firstName: 'first', lastName: 'last' })
// Should give return type as

// {
//     first: string;
//     last: string;
//     age: number;
// }
// */



// const user = {
//     firstName: "Tony",
//     lastName: "Stark",
//     age: 54
// }


// function transformKeys<T>(user: T,obj:Partial<T>):Partial<T>{
//     let result:Partial<T>={};
//     for(let key in user){
//         if(key in obj){
//             result[obj[key] as keyof T]=user[key];
//         }
//         else{
//             result[key]=user[key];
//         }
//     }
//     return result;
// }


// console.log(transformKeys(user, { firstName: 'first', lastName: 'last' }));



// // function transformKeys<T,U extends Partial<T>>(user:T,obj:U):void{
// //     for(let key in obj){
// //         if(key in (user as object)){
// //             // if (Object.prototype.hasOwnProperty.call(obj, key)) {
// //             (user as any)[key] = obj[key];
// //         // }
// //         }
// //     }

// // }

// // // transformKeys(user, { firstName: 'first', lastName: 'last' });
// // // transformKeys(user,{firstName:"abc",lastName:"xyz"});
// // // transformKeys(user,{firstName:"abc",lastName:"xyz"});
// // transformKeys(user,{firstName:"nishant",lastName:"xyz"})
// // // transformKeys(user)

// // // transformKeys(user,)
// // // transformKeys(user,{age})

// // console.log(user);







// // type User={
// //     firstName:string;
// //     lastName:string;
// //     age:number;
// // }

// // type Obj={
// //     firstName?:string;
// //     lastName?:string;
// //     age?:number;
// // }



// // const user:User={
// //     firstName
// // }
// // transformValue()