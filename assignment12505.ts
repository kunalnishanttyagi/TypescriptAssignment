/*


*/
const data = {
  name: "Alice",
  age: 30,
  address: {
    city: "Wonderland",
    zip: 12345,
    location: {
      country: "Fantasy",
    },
  },
  isActive: true,
};

function updateData<T extends Record<string,unknown>,K>(obj:Partial<T>,str:K):Partial<Record<string,unknown>>{
  // here i will traverse on all the keys and find if any valid present
  let newObj:Partial<Record<string,unknown>>={};
  for(let key in obj){
    // now check the key 
    let value=obj[key];
    if(value && typeof value==="object" && !Array.isArray(value)){
      // do recursive call
      let tempObj=updateData(value,str);

      for(let i in tempObj){
        (newObj)[i]=tempObj[i];
      }
    }
    else{
      let newKey=key as string;
      
      (newObj)[newKey]=(typeof value==="string"?(str+value) : value);
    }
    
    
  }
  return newObj;
}

console.log(updateData(data,"hello"));
// console.log(result);