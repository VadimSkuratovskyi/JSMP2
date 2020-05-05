class Point {
    constructor(x, y) {
        this.x = x !== undefined ? x : 0;
        this.y = y !== undefined ? y : 0;
    }

    toString() {
        return `X - ${this.x}\nY - ${this.y}`
    }

    getDistance(x1, y1, x2, y2) {
        return Math.hypot(x1 - x2, y1 - y2)
    }

    distance(pointObjOrX, y) {
        if (pointObjOrX === undefined && y === undefined) {
            return this.getDistance(0,0, this.x, this.y)
        } else if (typeof pointObjOrX === "object") {
            return this.getDistance(pointObjOrX.x, pointObjOrX.y, this.x, this.y)
        } else {
            return this.getDistance(pointObjOrX, y, this.x, this.y)
        }
    }
}

module.exports = { Point } ;
