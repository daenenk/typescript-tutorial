
namespace UnionTypes {

  type NumberOrString = number | string;
  const array: NumberOrString[] = [0, "b", 2, "d"];

  function either(cond: boolean): NumberOrString {
    if (cond) {
      return 42;
    } else {
      return "forty two";
    } 
  }

  let value = Math.random() < 0.5 ? 1 : "a";

  let map = new Map<string, string>();
  map.set("a", "apple");
  map.set("b", "banana");
  let result = map.get("c"); // What is the type of result ?  
  if (result !== undefined) {
    console.log(result.toUpperCase()); // Why is this safe ?
  } 

}

