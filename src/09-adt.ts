type Animal = { tag: "snake", length: number } | { tag: "horse", legs: number } 

function printAnimalInfo(animal: Animal) {
  switch (animal.tag) {
    case "snake":
      console.log("Snake length:", animal.length);
      break;
    case "horse":
      console.log("Snake horse:", animal.legs);
      break;
  }
}

type Either<L, R> =
  { left: L }
  | { right: R }

function doWithEither<T>(either: Either<{ a: number }, T>): number | T {
  if ("left" in either) {
    return either.left.a - 1
  } else {
    return either.right
  }
}

