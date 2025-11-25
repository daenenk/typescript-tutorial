export namespace Objects {

  // JavaScript has a unified object model where primitive values
  // can be wrapped in object types to provide properties and methods.
  // TypeScript follows this model. 
  // However, it is uncommon to use the object types directly in TypeScript.
  let language: String = new String("TypeScript");  // String with uppercase is the object type
  let flag: Boolean = new Boolean(false); 
  let year: Number = new Number(2024);
  let yearObject: object = new Number(2024);

  // Arrays are objects as well
  let abc: string[] = ["a", "b", "c"];   
  let arrayObject: object = ["a", "b", "c"];

  // Structural objects
  let struct: object = {  
    a: 0,
    b: 1
  }

  struct.a = 3;                     // Why do I get an error?

  let person = {
    name: "Tom",
    age: 42
  }

  person.age = 24;                 // No error, Why?
  person.age = "old";              // Why do I get an error?
  person.gender = "M";             // Why do I get an error?

  type Named = {
    name: string
  } 

  const named: Named = person;  // Structural typing, person has all properties required by Named

  interface HasAge {
    age: number
  }

  const hasAge: HasAge = person; // Structural typing, person has all properties required by HasAge

  // Both type aliases and interfaces support structural typing,
  // can be used for type annotations and to implement classes.
  // Interfaces can be extended, and preferred for public APIs and pure abstract classes.

  // class instances are structural objects as well
  class Person  {
    constructor(public name: string, public age: number) { }
  }

  const p: Named = new Person("Alice", 30); // Structural typing, Person has all properties required by Named

  // Tuples are structural objects as well

  const tuple = ["Tom", 33] as const; // readonly tuple
  let pair: [string, number] = ["Tom", 33]; // mutable tuple  

  type Headed = { 0: string }
  type Aged = { 1: number }
  const headed: Headed = ["Tom", 42] as const; // Arrays are structural objects as well. 
  const aged: Aged = ["Tom", 42] as const;

}