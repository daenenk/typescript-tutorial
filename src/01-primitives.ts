namespace Primitives {
  let v1: number = 1;
  let va: string = "a";
  let vf: boolean = false;

  let v2 = 2;                      // What is the type of v2 ?
  let vb = "b";                    // What is the type of vb ?
  let vt = true;                   // What is the type of vt ?

  v2 = NaN;                        // vale NaN ('Not a Number') has type number!
  v2 = Infinity;                   // vale Infinity has type number!

  v2 = "2";                        // Type error!

  const c1: number = 1;
  const ca: string = "a";
  const c2 = 2;                    // What is the type of c2 ?
  const cb = "b";                  // What is the type of cb ?
  const ct = true;                 // What is the type of ct ?

  c2 = 1;                          // Error: a constant cannot be re-assigned!
}