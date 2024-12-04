import { readFile, writeFile } from 'node:fs/promises'

// What is the return type of printFile?
async function printFile(name: string) {
  // What is the return type of readFile?
  // What is the type of body
  const body = await readFile(name, { encoding: 'utf8' });
  console.log(body);
}

type Config = {
  name: string,
  version: string
}

// What is the return type of loadConfig?
function loadConfig(name: string) {
  return readFile(name, { encoding: 'utf8' })
    .then(body => JSON.parse(body) as Config)
}

/// slides JavaScript p 49
function concatFiles(path1: string, path2: string, fb: string) { // default is a reserved keyword !
  // readFile without encoding returns a Buffer, not a string.
  const p1 = readFile(path1).catch(err => readFile(fb));
  const p2 = readFile(path2).catch(err => readFile(fb));
  return Promise.all([p1, p2])
    .then(([b1, b2]) => Buffer.concat([b1, b2]))
}

concatFiles("a.txt", "b.txt", "c.txt").then(val => {
  writeFile("merged.txt", val);
});


// Javascript p58
async function foo1() {
  return 42;
}

function foo2() {
  return Promise.resolve(42);
}

async function foo3() {
  return Promise.resolve(42);
}

function foo4() {
  return Promise.resolve(Promise.resolve(42));
}

/**
 * Promise<T> is an interface
 * Promise is an object of type PromiseConstructor:
 * 
 * interface PromiseConstructor {
 *   resolve<T>(value: T | PromiseLike<T>): Promise<Awaited<T>>
 * }
 * 
 * interface PromiseLike {
 *   then(){}
 *  }
 * 
 * Awaited<T> recursively unwraps the "awaited type" of a type.
 * 
 * type Awaited<T> = T extends null | undefined ? T :
 *   T extends object & { then(onfulfilled: infer F, ...args: infer _): any; } ? 
 *     F extends ((value: infer V, ...args: infer _) => any) ?
 *       Awaited<V> : 
 *     never : 
 *   T;
 */

 