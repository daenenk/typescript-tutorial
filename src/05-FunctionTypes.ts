namespace FunctionTypes {

  function inc(x: number): number { 
    return x + 1;  
  }

  const calc = inc;       // type inferred as (x: number) => number

  interface Output { 
    emit(msg: string): void;
  }

  const output: Output = {
    emit(msg: string): void {
      console.log("Output: " + msg);
    } 
  };

  const log = output.emit;  // type inferred as (msg: string) => void
 
}

