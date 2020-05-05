const {figureFactory} = require('./index');
const {Point} = require('./Point');

const circle = figureFactory(new Point(1,1));
console.log(`${circle.type} with perimeter ${circle.getPerimeter()}`);
console.log(`${circle.type} with square ${circle.getSquare()}`);

const isoscelesTriangle = figureFactory(new Point(1,1), new Point(2,2), new Point(3,3));
console.log(`${isoscelesTriangle.type} with perimeter ${isoscelesTriangle.getPerimeter()}`);
console.log(`${isoscelesTriangle.type} with square ${isoscelesTriangle.getSquare()}`);

const equilateralTriangle = figureFactory(new Point(0,0), new Point(1,0), new Point(1/2,Math.sqrt(3)/2));
console.log(`${equilateralTriangle.type} with perimeter ${equilateralTriangle.getPerimeter()}`);
console.log(`${equilateralTriangle.type} with square ${equilateralTriangle.getSquare()}`);

const square = figureFactory(new Point(2,7), new Point(5,7), new Point(5,4), new Point(2,4));
console.log(`${square.type} with perimeter ${square.getPerimeter()}`);
console.log(`${square.type} with square ${square.getSquare()}`);

const freeFigure = figureFactory(new Point(2,7), new Point(5,7), new Point(5,4), new Point(2,4), new Point(1,4));
console.log(`${freeFigure.type} with square ${freeFigure.getSquare()}`);
