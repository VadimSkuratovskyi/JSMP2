const Figure = require('./Figure');

class Square extends Figure{
    constructor(fistPointOrArrayOfPoints, secondPoint, thirdPoint, fourthPoint) {
        super();
        if (fistPointOrArrayOfPoints instanceof Array) {
            this.point1 = fistPointOrArrayOfPoints[0];
            this.point2 = fistPointOrArrayOfPoints[1];
            this.point3 = fistPointOrArrayOfPoints[2];
            this.point4 = fistPointOrArrayOfPoints[3];
        } else {
            this.point1 = fistPointOrArrayOfPoints;
            this.point2 = secondPoint;
            this.point3 = thirdPoint;
            this.point4 = fourthPoint;
        }
    }

    getPerimeter() {
        return this.point1.distance(this.point2) + this.point2.distance(this.point3) + this.point3.distance(this.point4) + this.point4.distance(this.point1);
    }

    getSquare() {
        return Math.sqrt(this.point1.distance(this.point2));
    }
}

module.exports = {
    Square
};
