let matrix = [1,2,3];

function add(arr) {
    return arr.reduce( (a,b) => a + b )
}

function increment(arr) {
    return arr.map((b) => b + 5)
}

function decrement(arr) {
    return arr.map((b) => b - 5)
}

function multiply(arr) {
    return arr.map((b) => b * 2)
}

function compose(...args) {
    return (arr) => {
        return args.reduce((previousValue, currentValue) => currentValue(previousValue), arr)
    }
}

let superOperation = compose(increment, decrement, multiply);
let superOperation2 = compose(decrement, increment, multiply);
let superPuper = compose(superOperation, superOperation2);
let superPuperDuper = compose(superPuper, decrement, superPuper, increment, multiply, add);
let result = superPuperDuper(matrix);
console.log(result);
