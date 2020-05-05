const {Circle} = require('./Circle');
const {Triangle, EquilateralTriangle, IsoscelesTriangle} = require('./Triangles');
const {Square} = require('./Squares');

function figureFactory(...args) {
    switch (args.length) {
        case 1:
            return new Circle(...args);
        case 3:
            const a = args[0].distance(args[1]);
            const b = args[1].distance(args[2]);
            const c = args[2].distance(args[0]);
            if (( a === b ) && ( b === c )) {
                return new EquilateralTriangle(args)
            } else if ((a === b) || (b === c) || (a === c)) {
                return new IsoscelesTriangle(args)
            } else {
                return new Triangle(this.points);
            }
        case 4:
            const side1 = args[0].distance(args[1]);
            const side2 = args[1].distance(args[2]);
            const side3 = args[2].distance(args[3]);
            const side4 = args[3].distance(args[0]);
            if ((side1 === side2) && (side1 === side3) && (side1 === side4)) {
                return new Square(args);
            } else {
                throw new Error("Such kind of Square doesn't exist")
            }
        default:
            throw new Error("Such kind of Figure doesn't exist")
    }
}

module.exports = {
    figureFactory
};
