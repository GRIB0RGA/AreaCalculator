import { getArea, ShapeTypes } from "./scripts/area";

getArea({ shapeType: ShapeTypes.Circle, radius: 3 });

getArea({ shapeType: ShapeTypes.Rectangle, sideLength: 5, height: 10 });

getArea({ shapeType: ShapeTypes.Triangle, sideLength: 5, height: 10 });
