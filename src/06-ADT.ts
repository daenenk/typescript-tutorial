type Snake = { tag: "snake", length: number } 
type Horse =  { tag: "horse", legs: number }
type Animal = Snake | Horse

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

function getValue<T>(either: Either<T, { value: T }>): T {
  if ("left" in either) {
    return either.left
  } else {
    return either.right.value
  }
}

getValue({ left: 42 });                // returns 42
getValue({ right: { value: 99 } });    // returns 99

