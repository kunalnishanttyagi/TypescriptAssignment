/*


Typescript Challenge
Component options is record with value of array of item with "title, image and variant"
Variant will have string with last letters as V1, V2, V3 ..... so on

Extract generic type from defined constant such that it gives type of each variant

type HeaderVariants = "HeaderV1" | "HeaderV2" 

*/

const componentOption = {
  button: [
    {
      title: "Button Primary",
      image: "/assets/buttonV1.png",
      variant: "ButtonV1",
    },
    {
      title: "Button Secondary",
      image: "/assets/buttonV2.png",
      variant: "ButtonV2",
    },
    {
      title: "Button Tertiary",
      image: "/assets/buttonV3.png",
      variant: "ButtonV3",
    },
  ],
  header: [
    {
      title: "Header Primary",
      image: "/assets/headerV1.png",
      variant: "HeaderV1",
    },
    {
      title: "Header Secondary",
      image: "/assets/headerV2.png",
      variant: "HeaderV2",
    },
  ],
} as const;


type VariantType<
  T extends Record<string, readonly { variant: string }[]>,
  K extends keyof T
> = T[K][number]["variant"];








// // type HeaderVariant;
// type AddVariant<T,K>=T|K;
// function getVariant<T extends object>(args:T):any{
//   // now i will traverse the array and find one by one and put them in the variant types 

//   for(let arr in args){
//     type HeaderVariant=undefined;
//     // now this arg is a array so we can now call the func again or just run a loop on all array
//     for(let obj in args[arr]){
//       // now this is individual ele 
//       type NewOne= AddVariant<HeaderVariant,obj.variant>;
//       HeaderVariant=NewOne;
//     }
//   }

// }

// getVariant(componentOption);


