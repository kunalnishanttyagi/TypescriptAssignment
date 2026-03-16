/*


*/
// type TransformObject = ?
// Example usage:


type MyObject = {
  a: {
    b: number;
    c: {
      d: string;
    };
  };
  e: boolean;
};


// got helped by google that says adding & {} gives the flatten obj for complex objects
type Change<T,str extends string>={
  [K in keyof T as `${str}${Extract<K,string>}`]:(T[K] extends object?Change<T[K],str>:T[K]);
}&{}

type UpdatedTypee=Change<MyObject,"hello_">;
// const obj:UpdatedType={};

