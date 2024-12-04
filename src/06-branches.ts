function plusOne(a: number | string): number | string {
  if (typeof a === "number") {   // type guard
    return a + 1                 // a is typed as number here
  } else {
    return `${a} + 1`            // a is typed as string here
  }
}

function select(a: { left: string } | { right: number }): number | string {
  if ("left" in a) {             // type guard
    return a.left
  } else {
    return a.right
  }
}

function unreachable(): number {
  if (false) {
    console.log("this is unreachable code");
    return "a string";                         // unreachable is also type checked
  }

  return 0
}