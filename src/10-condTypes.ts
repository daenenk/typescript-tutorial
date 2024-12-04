function foo(month: string, year: number) { }

const param: Parameters<typeof foo> = ["Dec", 2024]
// type Parameters<T extends (...args: any) => any> =
//   T extends (...args: infer P) => any ? P : never;

type ArrayObject<TS extends Record<string, unknown>> = {
  [K in keyof TS]: TS[K][]
}

function headOrDefault<TS extends Record<string, unknown>>(arrays: ArrayObject<TS>, defaults: TS): TS {
  return (Object.keys(arrays) as (keyof TS)[])
    .reduce((acc, key) => {
      const value = arrays[key].length === 0 ? defaults[key] : arrays[key][0]
      acc[key] = value;
      return acc
    },
      {} as TS)
}

const heads = headOrDefault({
  a: [1, 2],
  b: [],
  c: ["a", "b"]
}, {
  a: 0,
  b: false,
  c: ""
});

console.log(heads)
// returns { a: 1, b: false, c: 'a' } 

heads.a // is a number
heads.b // is a boolean
heads.c // is a string
