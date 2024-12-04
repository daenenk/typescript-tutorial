import { Objects } from "./02-objects"

function unionTyples(cond: boolean) {

  let a = [1, "a", { x: 1, y: 1 }];     // cfr JavaScript p13
  const a1 = a[1];
  const t: [number, string, { x: number, y: number }]
    = [1, "a", { x: 1, y: 1 }];
  const t1 = t[1];  // Compare type of t1 with a1!

  let vaorb = cond ? "a" : "b"     // What is the type of vaorb ?
  const caorb = cond ? "a" : "b"   // What is the type of caorb ?

  type TaOrb = "a" | "b";
  const cab: TaOrb[] = ["a", "b"]
  cab.push("a");                   // Why can I push "a"?
  cab.push("c");                   // Why can't I push "c"?

  type Tuple = [number, string];
  const tuple: Tuple = [0, "b"];
  tuple[0] = 1;
  tuple[1] = "B";
  tuple[2] = "C";                  // Why can't access [2]?
  tuple.push("c");                 // WTF !?

  const [x, y] = tuple;            // What is the type of x, resp. y ?

  // Typical use of a tuple in pattern matching
  // check the type of key, value in both cases
  Object.entries(Objects.rec)
    .map(([key, value]) => console.log(key, value));
  Object.entries(obj)
    .map(([key, value]) => console.log(key, value));

}