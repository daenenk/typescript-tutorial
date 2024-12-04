import { XY, XYZ, Point, Point3D } from "./07-classes"

type Map<T> = (p: T) => T;
type MapPoint = Map<Point>;
type MapPoint3D = Map<Point3D>;

const p2D: Point = new Point3D(1, 0, 0);
const p3D: Point3D = new Point3D(1, 0, 0);
const p3Dx: Point3D = new Point(1, 0);
const map1: MapPoint = (p: Point) => new Point3D(p.x, p.y, 0);
const map2: MapPoint = (p: Point3D) => new Point(p.x, p.y);
const map3: MapPoint3D = (p: Point) => new Point3D(p.x, p.y, 0);
const map4: MapPoint3D = (p: Point3D) => new Point(p.x, p.y);

const p2Ds: Point[] = [new Point(1, 0)];
p2Ds.push(p3D);   // indeed p3D extends Point;
const p3Ds: Point3D[] = [new Point3D(1, 0, 0)];
p3Ds.push(p2D);   // indeed p2D is not a Point3D;

const p3DsAlias: Point[] = p3Ds;
p3DsAlias[0] = new Point(1, 0);
p3Ds[0].z;             // What's the current value of p3Ds[0]?
