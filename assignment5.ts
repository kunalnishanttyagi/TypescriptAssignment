/*

Define an enum Direction with values Up, Down, Left, and Right. Then, create a function that takes a Direction value and returns a string representing the direction.

Complete Below Method

console.log(getDirection(Direction.Up)); // Output: "Up"

*/

enum Directions {
    up,
    down,
    right,
    left
}

// type Direction="up"|"down"|"right"|"left";

function tellDirection<T extends keyof typeof Directions>(param:T){
  return Directions[param];
    
}
console.log(tellDirection("down"));












// enum Directions {
//     up="UP",
//     down="DOWN",
//     right="RIGHT",
//     left="LEFT"
// }

// type Direction="UP"|"DOWN"|"RIGHT"|"LEFT";

// function tellDirection<T extends Direction>(param:string):Direction{
//     let key:string=param;
//     return Directions.key;
// }
// console.log(tellDirection("up"));

