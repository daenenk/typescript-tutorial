function JSstyle(cond: boolean) {

  const trueOrFalse = cond ? true : "false";
  if (trueOrFalse) {
    console.log("It was true")
  } else {
    console.log("It was false")
  }

// In JavaScript, constructs like if 
// first “coerce” their conditions to booleans.
// Values like
//   0
//   NaN
//   "" (the empty string)
//   0n (the bigint version of zero)
//   null
//   undefined
// all coerce to false, and other values get coerced to true.

  let a: any = 0;
  a = "a";
  a = a + 1;                              // Type check valid, but what will happen at runtime?

  let b: number = 1;
  (b as any) = "b";
  b = b + 1;                              // b has type number, so you think your save,... NOT!

  const c: number = "one" as number;      // Type error!

  const d: number = "one" as any;         // Still, via any (or unknown) I can force anything!
  const e1 = "one" as any as number;      // What will be the static type of e1, e2 ?
  const e2 = "one" as unknown as number;

  type A = { a: string }
  const obj1: A = { a : 1 } as A          // Type casting is type-checked,
  const obj2: A = { } as A                // but allows undefined
}
