
export interface XY {
  x: number;
  y: number;
}

// cfr. JavaScript p21
export class Point implements XY {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `(${this.x} , ${this.y})`;
  }
}

const p = new Point(1, 2);

export interface XYZ extends XY {
  z: number
}

export class Point3D extends Point implements XYZ {
  z: number;
  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }
  toString() {
    return `(${this.x} , ${this.y}, ${this.z})`;
  }
}

const p3D = new Point3D(1, 2, 3);

