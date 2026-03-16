/*

Create a utils type DefinedProperties that takes object and make every property to be also defined (remove null or undefined from the value type)

Challenge one -> Single level object type
Challenge two -> Nested object type

interface User {
age?: number;
name: string | null;
}

type DefineExample = DefinedProperties<Example>;
Should infer DefineExample as { age: number; name: string; }

*/


// here i have to restrict null values 

type RemoveNull<T>=T extends null ? never:T;

interface User{
age: number;
name: string | null;

}
type X=string|number|null;


type WithoutNullx=RemoveNull<X>;



// now i have to restict the inner val;ues to not null


type User1 ={
age: number;
name: string | null;

}

type RemoveNullDeep<T>={
  // this is not working
  // [K in keyof T]:T[K] extends null ?never:T[K];
  // or 
  // [K in keyof T]:Exclude<T[K],null>
  // or
  [K in keyof T] :RemoveNull<T[K]>
}


type WithoutNullDeepUser1=RemoveNullDeep<User1>;
