const Figure = require('./Figure');

class Triangle extends Figure{
    constructor(fistPointOrArrayOfPoints, secondPoint, thirdPoint) {
        super();
        if (fistPointOrArrayOfPoints instanceof Array) {
            this.point1 = fistPointOrArrayOfPoints[0];
            this.point2 = fistPointOrArrayOfPoints[1];
            this.point3 = fistPointOrArrayOfPoints[2];
        } else {
            this.point1 = fistPointOrArrayOfPoints;
            this.point2 = secondPoint;
            this.point3 = thirdPoint;
        }
    }

    getPerimeter() {
        return this.point1.distance(this.point2) + this.point2.distance(this.point3) + this.point3.distance(this.point1);
    }
}

class IsoscelesTriangle extends Triangle{
    constructor(fistPointOrArrayOfPoints, secondPoint, thirdPoint) {
        super(fistPointOrArrayOfPoints, secondPoint, thirdPoint);
        this.side1 = this.point1.distance(this.point2);
        this.side2 = this.point2.distance(this.point3);
        this.side3 = this.point3.distance(this.point1);
    }

    getPerimeter() {
        return "IsoscelesTriangle perimeter"
    }

    getSquare() {
         return "IsoscelesTriangle square"
    }
}

class EquilateralTriangle extends Triangle {
    constructor(fistPointOrArrayOfPoints, secondPoint, thirdPoint) {
        super(fistPointOrArrayOfPoints, secondPoint, thirdPoint);
        this.side1 = this.point1.distance(this.point2);
        this.side2 = this.point2.distance(this.point3);
        this.side3 = this.point3.distance(this.point1);
    }

    getPerimeter() {
        return "EquilateralTriangle  perimeter"
    }

    getSquare() {
        return "EquilateralTriangle square"
    }
}

module.exports = {
    Triangle,
    IsoscelesTriangle,
    EquilateralTriangle
};
