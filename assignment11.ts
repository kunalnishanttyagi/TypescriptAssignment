
/*
A function to access object property value
Parameters are object value and key name, key name is restricted to object keys
Return type is be accessed object value.

Challenge1 : Flat level object

const value = flatGet(user, 'name');
Challenge2 : Nested Object

const value = deepGet(obj, 'foo.bar.baz');
const value = deepGet(obj, ['foo','bar','baz'];

Challenge3 : Full path else type error
*/


// challenge 1


const user={
    name:"nishant",
    age:20
}


type nestedType<T> =  T[keyof T];
function flatGet<T>(user:T,key:keyof T):nestedType<T>{

    // for(let key in user){
    // here i am using type assertion that trust me it is string or a number only
    return user[key];

    // return "123";
    // }
}
console.log(flatGet(user,'name'));

console.log(flatGet(user,"age"))






// challenge 2

// type Bar={
//     baz:string;
// }
// type Foo={  
//     bar:Bar;
// }


// type Obj={
//     foo:Foo
// }

const obj={
    foo:{
        bar:{
            baz:"hello"
        }
    }
}

// function isTypeEqual<T,U>(arg1:T,args2:U):Boolean{
//     return T===U
// }

type nestedType<T> =  T[keyof T];
function deepGet<T,U>(user:T,args:U):string{
    // console.log("hii");
    // console.log(args);

    let result;
    if(Array.isArray(args)){

        
    // now search in the obj for the key at 0th index
    
    for(let key in user){
        if(key==(args[0])){
            // console.log(obj);
            // console.log(key);
            if(args.length>1){
                // it is nested so recursive call do 
                result=deepGet(user[key],args.splice(1,args.length));
                break;
            }
            else{
                // console.log(obj);
                // console.log(key);
                // console.log(key);
                // console.log(user[key]);
                result=user[key] as string;
                break;
            }
        }
    }

    }
    else if(typeof args==="string") {
        // now search in the obj for the key at 0th index
        let str="";
        let remaining="";

        let flag=true;
        for(let index in (args as String)){
            if(args[index]==='.') {
                if(flag===false) remaining+=args[index];
                flag=false; 
            }
            else if(flag)
                str+=args[index];
            else{
                    remaining+=args[index];
                }
        }
        // console.log(str);
        // console.log(remaining);
        for(let key in user){
            if(key===str){
                // yes i got the key now 
                if(remaining.length>0){
                    // it is nested so recursive call do 
                    result=deepGet(user[key],remaining);
                }
                else{
                    result=user[key] as string;
                }
            }
        }
    }

    return result;
}

console.log(deepGet(obj,["foo","bar","baz"]));
console.log(deepGet(obj,"foo.bar.baz"));







