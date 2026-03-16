// /*

// Description

// You are given two datasets in the form of JSON objects. One contains user information and the other contains purchase information. Your task is to merge these datasets such that each user in the first dataset has a list of their corresponding purchases from the second dataset.

// Dataset 1: Users

// const users = [
//   { id: 1, name: "John Doe", email: "john@example.com" },
//   { id: 2, name: "Jane Smith", email: "jane@example.com" },
//   { id: 3, name: "Jim Brown", email: "jim@example.com" },
// ];
// Dataset 2: Purchases

// const purchases = [
//   { userId: 1, item: "Laptop", price: 1200 },
//   { userId: 2, item: "Phone", price: 800 },
//   { userId: 1, item: "Mouse", price: 20 },
//   { userId: 3, item: "Keyboard", price: 100 },
//   { userId: 2, item: "Monitor", price: 200 },
// ];

// */

// // lets make the function

type Review<>={
  userId:number;
  review:string;
  star:number;
}

type Purchase={
  userId:number;
  item:string;
  price:number;
}
type Other={
  [key:string]:string|number;
}
type Purchases=Purchase[];
type Reviews=Review[]

type User = {
  id: number;
  name: string;
  email: string;
  // category:Other[];
  purchases?: Other[];
  reviews?: Other[];
};

function mergeData<T extends User,U extends Purchase|Review>(users:T[],args:U[],category:"purchases"|"reviews"){
  // now i wil create a new function 
  // create the empty object and fit the things in it
  // or jst mark my answer as user and just add a field of obj
  let ans=users;

  for(let user in ans){
    ans[user][category]=[];
    for(let arg in args){
      console.log(users[user]);
      console.log(args[arg]);
      
      console.log("next one is ");
      let currUser=ans[user] as User;
      let currArg=args[arg] as Purchase|Review;
      if(currArg["userId"]===currUser["id"]) continue;

      const firstKey = category==="reviews"?"review":"item";
      const secondKey=category==="reviews"?"star":"price";
      // ans[user][category] = [];
        // it is review objects
      ans[user][category].push({
        [firstKey]:(currArg as any)[firstKey],
        [secondKey]:(currArg as any)[secondKey]
      })
        }
      
      
    
  }
  return ans;

}

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Jim Brown", email: "jim@example.com" },
];

const purchases:Purchases = [
  { userId: 1, item: "Laptop", price: 1200 },
  { userId: 2, item: "Phone", price: 800 },
  { userId: 1, item: "Mouse", price: 20 },
  { userId: 3, item: "Keyboard", price: 100 },
  { userId: 2, item: "Monitor", price: 200 },
];

const userReviews:Reviews = [
  { userId: 1, review: "Not good", star: 1200 },
  { userId: 2, review: "Bad", star: 800 },
  { userId: 1, review: "Average", star: 20 },
  { userId: 3, review: "Excellent", star: 100 },
  { userId: 2, review: "Poor", star: 200 },
];




// // Example usage:
const mergedWithPurchases = mergeData(users, purchases, "purchases");
// const mergedWithReviews = mergeData(users, userReviews, "reviews");
console.log("this si the final answer");

console.log(mergedWithPurchases);