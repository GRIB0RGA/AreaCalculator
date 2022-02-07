export enum ShapeTypes {
  Circle = "circle",
  Rectangle = `rectangle`,
  Triangle = `triangle`,
}

export interface Circle {
  shapeType: ShapeTypes.Circle;
  radius: number;
}

export interface Rectangle {
  shapeType: ShapeTypes.Rectangle;
  sideLength: number;
  height: number;
}
export interface Triangle {
  shapeType: ShapeTypes.Triangle;
  sideLength: number;
  height: number;
}
//prettier-ignore
const getCircleArea = (radius:number):void => console.log(Math.PI * Math.pow(radius, 2));
//prettier-ignore
const getRectangleArea = (height:number,sideL:number):void =>console.log( height * sideL * 0.5);
//prettier-ignore
const getTriangleArea = (height:number,sideL:number):void => console.log(height*sideL);

type Shape = Circle | Rectangle | Triangle;

//prettier-ignore
export const getArea = (shape: Shape) =>
  shape.shapeType === "circle" ? getCircleArea(shape.radius)
  : shape.shapeType === "triangle" ? getRectangleArea(shape.height,shape.sideLength)  
  : shape.shapeType === "rectangle" ? getTriangleArea(shape.height,shape.sideLength) 
  : console.log(`Shape not found`);
