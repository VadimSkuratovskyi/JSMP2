class Figure {
    constructor() {
        if (this.constructor === Figure) throw new Error(`Instance of abstract class ${this.constructor.name} can't be created`)
    }

    get type() {
        return this.constructor.name;
    }

    getPerimeter() { throw new Error("This method should be implemented") }

    getSquare() { throw new Error("This method should be implemented") }
}

module.exports = Figure;
