import { readFile, writeFile } from 'node:fs/promises'

// What is the return type of printFile? (Compare it with return type of the returned value body)
async function printFile(name: string) {
  const body = await readFile(name, { encoding: 'utf8' });
  console.log(body);
  return body;
}

type Config = {
  name: string,
  version: string
}

// What is the return type of loadConfig?
function loadConfig(name: string) {
  return readFile(name, { encoding: 'utf8' })
    .then(body => JSON.parse(body) as Config)    // Note: unsafe but allowed type cast from parsed JSON to Config
}

/// slides JavaScript p 49 - return Promise<Buffer<ArrayBuffer>>
function concatFiles(path1: string, path2: string, fb: string) { // default is a reserved keyword, don't use it as an identifier
  // readFile without encoding returns a Buffer, not a string.
  const p1 = readFile(path1).catch(err => readFile(fb));
  const p2 = readFile(path2).catch(err => readFile(fb));
  return Promise.all([p1, p2])
    .then(([b1, b2]) => Buffer.concat([b1, b2]))
}

concatFiles("a.txt", "b.txt", "c.txt").then(val => {
  writeFile("merged.txt", val);
});
