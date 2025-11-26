// Three interfaces are defined with an inheritense relation: 
// EBike extends Bike extends Vehicle.
// I could also have defined classes, but the principle is the same. 

interface Vehicle {
  maxSpeed: number;
  nbrOfWheels: number;
}

interface Bike extends Vehicle {
  breakType: string
}

interface EBike extends Bike {
  batteryCapacity: number;
}

// Output is an interface with a type parameter.
interface Output<T> {
  emit(item: T): void;
}

// I wrap my examples in a function, so I can assume instances without defining a constructor.

function example1(bikeOut: Output<Bike>, b: Bike, eb: EBike, v: Vehicle) {
  // This is what you expect
  bikeOut.emit(b);
  bikeOut.emit(eb);
  bikeOut.emit(v); // Error: Argument of type 'Vehicle' is not assignable to parameter of type 'Bike'.
}

// Now I'll misuse the way covariance is defined in TypeScript.

function send<T extends Vehicle>(item: T, out: Output<T>) {
  out.emit(item);
}

function example2(bikeOut: Output<Bike>, v: Vehicle, b: Bike, eb: EBike) {
  send(b, bikeOut);  // T inferred as Bike
  send(eb, bikeOut); // T inferred as Bike
  send(v, bikeOut);  // T inferred as Vehicle, acceptance of bikeOut is unsound.

  // bikeOut is considered as assignable to Output<Vehicle>.
  // Covariance in TypeScript permits the call signature in an object
  // to be either covariant ot contravariant.

  // We can also show the unsoundness with
  const emit: ((item: Vehicle) => void) = (item: Bike) => { console.log(item.breakType) }
  const vout: Output<Vehicle> = bikeOut;
  const ebout: Output<EBike> = bikeOut;
}

interface Intput<T> {
  on(handle: (item: T) => void): void;
}

function example3(bikeIn: Intput<Bike>) {
  bikeIn.on((bike: Bike) => { console.log(bike.breakType) });

  const vIn: Intput<Vehicle> = bikeIn;           // Possible because Intput is covariant in T.
  vIn.on((v: Vehicle) => { console.log(v.nbrOfWheels) });

  const ebIn: Intput<EBike> = bikeIn;            // Error: Type 'Intput<Bike>' is not assignable to type 'Intput<EBike>'.
}

interface TransportChannel<T> extends Intput<T>, Output<T> { }

function example4(bikeChan: TransportChannel<Bike>) {
  const vChan: TransportChannel<Vehicle> = bikeChan;
  const ebChan: TransportChannel<EBike> = bikeChan; // Error: Type 'TransportChannel<Bike>' is not assignable to type 'TransportChannel<EBike>'.  
}

// While Input/Output could be seen in the context of producer/consumer and immutable message passing
// the covariance rules in TypeScript are inspired by a mutable object model, where properties can be both read and written.
// In such a model, contravariance in method parameters is not enforced in TypeScript.

interface Gettable<T> {
  get(): T;
}

interface Settable<T> {
  set(value: T): void;
}

interface Store<T> extends Gettable<T>, Settable<T> { }

function example5(bikeStore: Store<Bike>) {
  const vstore: Store<Vehicle> = bikeStore; // accepted, though unsound.
  const ebstore: Store<EBike> = bikeStore;  // Error: Type 'Store<Bike>' is not assignable to type 'Store<EBike>'.  
}

// Having a mutable field makes covarance unsound as well.
// Its same like having a set and a get method.
interface WithMutableField<T> {
  value: T;
}

/*
 * Therefore, common programming idioms
 * must be supported directly at the type level. One such idiom that occurs ex-
 * tensively in JavaScript codebases and thus is supported directly is covariance of
 * property and parameter types in function signatures. Although this idiom is not
 * in general safe, dynamic programmers frequently make safe use of it.
 * 
 * The properties are compared for covariance, but whether the type parameter T is used
 * in a covariant or contravariant position inside the property type is not considered.
 * 
 * Mutable objects are commonly used in JavaScript,
 * even in cases where the implemention uses them is if there where immutable.
 * Thus, TypeScript supports covariance of property types in mutable objects.
 * 
 * E.g. Arrays are used as Seq in functional programming, where they are immutable.
 */

// Same is true for arrays
function example6(bikes: Bike[]) {
  const vs: Array<Vehicle> = bikes; // accepted, though unsound.
  const ebs: Array<EBike> = bikes;  // Error: Type 'Array<Bike>' is not assignable to type 'Array<EBike>'.  
}

function example7() {
  const array = [1, 2, 3];
  (array as Array<string>)[0].toUpperCase(); // Error: Conversion of type 'number[]' to type 'string[]' may be a mistake
  (array as Array<number | string> as Array<string>)[0].toUpperCase(); // Error at runtime: toUpperCase is not a function
}
