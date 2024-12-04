function f1(x: number) { return x + 1 }

type NumberToNumber = (x: number) => number
const f2: NumberToNumber = f1
const f3: NumberToNumber = x => x + 2

type Special = NumberToNumber & { __special: string }

function makeSpecial(f: NumberToNumber): Special {
  const special: Special = f as Special;
  special.__special = "special";
  return special;
}

// Try also:
// f.name
// f.toString()

namespace ArrowFunctionAsParameter {
  // cfr. JavaScript p16
  let ns = [1, 2, 3];
  const voids = ns.map(x => { value: x })

  const vals = ns.map(x => ({ value: x }))

  // void is a type and buildin keyword to make an expression void.
  let v = void 3;
  let vs = [void 3];
  let whatsThis = [(() => { })()];
}
