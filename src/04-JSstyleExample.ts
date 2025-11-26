
namespace JSstyleExample {

  function add(a, b) {
    return a + b;
  }

  let sum = add(1, 2);           // What is the type of sum ?
  let appended = add("a", "b");
  let APPENDED = appended.toUpperCase();
  let SUM = sum.toUpperCase();   // Will this work at runtime ?

  function unsafeAdd(a: unknown, b: unknown): unknown {
    return add(a, b);
  }

  unsafeAdd(1, 2).toUpperCase(); // Error: unknown has no method toUpperCase

  function safeAdd(a: number, b: number): number {
    const c = unsafeAdd(a, b);
    if (typeof c === "number") {    
      return c;   
    } else {
      throw new Error("Unexpected result from unsafeAdd");
    } 
  }

  let safeSum = safeAdd(1, 2);       // What is the type of safeSum ?

}

