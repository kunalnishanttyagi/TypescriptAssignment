/*


*/
const data = {
  userId: "john_doe",
  details: {
    addressId: "abc123",
    name: "John",
    attributes: {
      itemId: "xyz456",
      info: "Some info here",
    },
  },
  items: [
    {
      productId: "p123",
      description: "a product",
    },
    "just a string",
  ],
};

function updateData<T extends Record<string,unknown>>(obj:Partial<T>):Partial<Record<string,unknown>>{
  // here i will traverse on all the keys and find if any valid present
  let newObj:Partial<Record<string,unknown>>={};
  for(let key in obj){
    // now check the key 
    let value=obj[key];
    if(value && typeof value==="object" && !Array.isArray(value)){
      // do recursive call
      let tempObj=updateData(value);

      for(let i in tempObj){
        (newObj)[i]=tempObj[i];
      }
    }
    else{
      let newKey=key as string;
      // take this key and put the value equal to 
      console.log(key);
      if(key.includes("Id")){
        // then take out the starting string
        newKey=key.substring(0,(key.length-2))+"Identifier";

      }
      (newObj)[newKey]=(typeof value==="string"?value.toUpperCase() : value);
    }
    
    
  }
  return newObj;
}

let result={};
console.log(updateData(data));
// console.log(result);