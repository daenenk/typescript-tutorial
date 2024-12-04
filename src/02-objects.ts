export namespace Objects {
  // Array
  let vabc = ["a", "b", "c"];      // What is the type of vab ?
  const cabc = ["a", "b", "c"];    // What is the type of cab ?

  const array: Array<number> = [1, 2, 3]; // Array the interface of arrays

  // Object
  export let obj: object = {       // export makes declaration importable
    a: 0,
    b: 1
  }

  obj.a = 3;                       // Why do I get an error?

  // object is a type
  // Object is a function (and an object) of type ObjectConstructor
  // Object is also an interface

  let objab = {
    a: 0,
    b: 1
  }

  objab.a = 3;                     // No error, Why?
  objab.b = "b";                   // Why do I get an error?
  objab.c = 3;                     // Why do I get an error?

  export let rec: Record<string, number> = {
    a: 0,
    b: 1
  }

  rec.a = 3;
  rec.b = "b";                     // Why do I get an error?
  rec.c = 3;                       // No error, Why?

  let o = {
    a: 1,
    b: 2,
    c: 3
  }

  delete o.c;                       // .c is mandatory

  type O = {
    a: number,
    b: number,
    c?: number
  }

  let oo: O = {
    a: 1,
    b: 2,
    c: 3
  }

  delete oo.c;                      // .c is optional

  // Note the difference; type inference of let differs from const
  let a = "a";
  o[a];
  const b = "b";
  o[b];
}