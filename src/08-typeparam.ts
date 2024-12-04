function twin<T>(t: T): [T, T] { return [t, t] }

// Recursive type definition
type BinTree<T> = {
  root: T;
  left?: BinTree<T>;
  right?: BinTree<T>;
}

function extractNumberOrError<T>(param: { a: number } | T): number | T {
  if ("a" in param) {    // Why do I got an error here?
                         // Can we solve this by adding a type constraint?
    return param.a
  }
}

function extractNumberOr<T>(param: { a: number } | T): number | T {
  if (param
    && typeof param === "object"
    && "a" in param) {
    return param.a - 1              // param.a might not be a number; try call with ({a:"hello"})
  } else {
    return param
  }
}

type Person = {
  firstName: string;
  lastName: string;
}

// type Partial<T> = { [P in keyof T]?: T[P] | undefined; }
const person: Partial<Person> = {
  lastName: "Smith"
}