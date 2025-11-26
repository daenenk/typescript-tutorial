namespace Primitives {

  let language: string = "TypeScript";
  let flag: boolean = false;  

  flag = 1;                          // Type error! must be boolean

  // both integers and floating point numbers are of type 'number'
  // a double-precision 64-bit binary format IEEE 754 value, like double in Java or C#
  let year: number = 2024;
  year = year + 1;                   // This pure JavaScript, valid in TypeScript, if the types match.
  let pi: number = 3.14;    

  // The explicit type annotation is optional if a variable is initialized at the time of declaration.
  let name = "Tom";                  // type inferred as string
 
  let dividedByZero: number = NaN;   // the value NaN ('Not a Number') has type number!
  let veryBig: number = Infinity;    // the value Infinity has type number!

  // const creates an immutable bindings, the type inference narrows the type to the literal type
  const two = 2;                     // What is the type of two ?
  const b = "b";                     // What is the type of b ?
  const truth = true;                // What is the type truth  ?
  const wrong: false = true;         // Type error! 

}