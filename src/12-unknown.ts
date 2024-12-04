/* 
 * void      : when no value is returned
 * never     : when no type is returned (bottom of the type hierarchy)
 * undefined : type of value undefined, means unspecified (yet)
 * null      : type of value null, means explicit zero input or output
 * any       : dynamic type, i.e. wildcard of the type system 
 * unknown   : top of the type hierarchy, 
 *             every type is a subtype of unknown,
 *             but it is not dynamic as any.
 */

function unknownCanHoldAnything() {
  let u: unknown = 1;
  u = "a";
  u = (x: number) => x + 1;
  u = null;
  u = void 0;
}

function whatCanBeAssignedToUnknown<Known>(u: unknown) {
  const v0: void = u;
  const v1: never = u;
  const v2: undefined = u;
  const v3: null = u;
  const v4: unknown = u;
  const v5: any = u;
  const v6: Known = u;
}
