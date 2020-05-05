const Figure = require('./Figure');
const {Point} = require('./Point');

class Circle extends Figure{
    constructor(point) {
        super();
        if (point instanceof Point) {
            this.point = point;
            this.radius = this.point.distance();
        } else {
            throw new Error('Should be instance of Point');
        }
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }

    getSquare() {
        return Math.PI * Math.sqrt(this.radius)
    }
}

module.exports.Circle = Circle;
