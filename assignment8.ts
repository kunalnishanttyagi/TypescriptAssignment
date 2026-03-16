/*
Create a utils type NullabelProperties that takes object and make every property to be also null

Challenge one -> Single level object type
Challenge two -> Nested object type

interface User {
    age: number;
    name: string;
}

type NullableExample = NullabelProperties<Example>;
Should infer NullableExample as { age: number|null ; name: string|null; }

*/


// here i have to add null to all values and this is simple 


type AddNull<T>=T|null;

interface User{

    age: number,
    name: string

}
type X=string|number;


type WithNull=AddNull<X>;



// now i have to restict the inner val;ues to not null


type User1 ={

age: number;
name: string|null;

}

type AddNullDeep<T>={
  // this is not working
  // [K in keyof T]:T[K] extends null ?never:T[K];
  // or 
  // [K in keyof T]:T[K]|null
  // or
  [K in keyof T] :AddNull<T[K]>
}


type WithNullDeep =AddNullDeep<User1>;
const user2:WithNullDeep={
  // age:null,
  name:null,
  age:null
}