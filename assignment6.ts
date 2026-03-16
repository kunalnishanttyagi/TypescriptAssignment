/*

Write a type guard function that checks if a value is an instance of a class Dog. Then, create a function that takes an array of mixed objects and returns only the objects that are instances of Dog.

const animals = [new Dog(), new Cat(), new Dog()];
console.log(filterDogs(animals));
Output: [Dog, Dog]
*/



type AnimalType={
    name:string;
    age:number;
}
type DogType=AnimalType;
type CatType=AnimalType;
class Animal{
    name:string|undefined;
    age:number|undefined;

    constructor(name?:string,age?:number){
        this.name=name;
        this.age=age;
    }
}


class Dog extends Animal{
    // name:string;
    // age:number;

    constructor(name?:string,age?:number){
        super(name,age);
    }
    


    speak():void{
        console.log("I am a Dog so i bark");
    }
}

class Cat extends Animal{
    constructor(name?:string,age?:number){
        super(name,age);
    }
    

    speak():void{
        console.log("I am a Cat so i neaw");
    }
}


function getOnlyDogs<T>(args:T[]):T[]{
  let result:T[]=[];
  for(let arg of args){
    if(arg instanceof Dog){
      result.push(arg);
    }
  }
  return result;
}

let bruno=new Dog("bruno",4);
let techie=new Dog("teckie",3);
let bru=new Cat("bru",4);
let tec=new Cat("tec",3);
let ans=getOnlyDogs([bruno, techie, bru, tec]);
console.log(ans);





















// /*

// Write a type guard function that checks if a value is an instance of a class Dog. Then, create a function that takes an array of mixed objects and returns only the objects that are instances of Dog.

// const animals = [new Dog(), new Cat(), new Dog()];
// console.log(filterDogs(animals));
// Output: [Dog, Dog]

// */

// type AnimalType={
//     name:string;
//     age:number;
// }
// type DogType=AnimalType;
// type CatType=AnimalType;
// class Animal{
//     name:string|undefined;
//     age:number|undefined;

//     constructor(name?:string,age?:number){
//         this.name=name;
//         this.age=age;
//     }
// }


// class Dog extends Animal{
//     // name:string;
//     // age:number;

//     constructor(name?:string,age?:number){
//         super(name,age);
//     }
    


//     speak():void{
//         console.log("I am a Dog so i bark");
//     }
// }

// class Cat extends Animal{
//     constructor(name?:string,age?:number){
//         super(name,age);
//     }
    

//     speak():void{
//         console.log("I am a Cat so i neaw");
//     }
// }



// function filterDogs<T extends AnimalType|DogType|CatType>(param:T[]):T[]{
//     // const result=param.reduce((acc,obj)=>{
//     //     if(obj instanceof Dog) {
//     //         acc.push(obj);
//     //     }
//     //     else return acc;
//     // }:Animal[],[])


//     let result=[];
//     for(let obj of param){
//         if(obj instanceof Dog){
//             result.push(obj);
//         }
//     }

//     return result ;
// }



// const animals1 = [new Dog(), new Cat(), new Dog()];
// console.log(filterDogs(animals1));


// const animals2 = [new Dog("xyz"), new Cat("abc"), new Dog("mno",3)];
// console.log(filterDogs(animals2));
// // Output: [Dog, Dog]

