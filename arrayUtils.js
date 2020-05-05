function forEach(arr, callback) {
    if (arr instanceof Array) {
        for (let i = 0; i < arr.length; i++) {
            callback(arr[i], i, arr);
        }
    } else
        throw new Error(`${arr} isn't Array`)
}

forEach([1, 2, 3], (num, i, nums) => console.log(`Number: ${num}, index: ${i},`, nums));

function map(arr, callback) {
    if (arr instanceof Array) {
        let results = [];
        for (let i = 0; i < arr.length; i++) {
            results.push(callback(arr[i], i, arr));
        }
        return results;
    }
    throw new Error(`${arr} isn't Array`)
}

let arr = map([1, 2, 3], (num) => num**2);
forEach(arr, (num, i, nums) => console.log(`Number: ${num}, index: ${i},`, nums));


function filter(arr, callback) {
    if (arr instanceof Array) {
        let results = [];
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i], i, arr)) {
                results.push(arr[i]);
            }
        }
        return results;
    }
    throw new Error(`${arr} isn't Array`)
}

let data = filter(['Hello', ',', 'JavaScript', 'World', '!'], (str) => str.toLowerCase() !== str);
forEach(data, (num, i, nums) => console.log(`Number: ${num}, index: ${i},`, nums));


function reduce(arr, callback, startValue) {
    if (arr instanceof Array) {
        let result = startValue;
        for (let i = 0; i < arr.length; i++) {
            result = callback(result, arr[i], i, arr);
        }
        return result;
    }
    throw new Error(`${arr} isn't Array`)
}

let arr1 = reduce([1,2,3], (accumulator, currentValue) => accumulator + currentValue, 80);
console.log(arr1);


function every(arr, callback) {
    if (arr instanceof Array) {
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i], i, arr)) {
                return true;
            }
        }
        return false;
    }
    throw new Error(`${arr} isn't Array`)
}

console.log(every([10, 20, 30, 40, 50], (element) => element >= 10 ));
console.log(every([1, 2, 3, 0, 5], (element) => element >= 10 ));


function some(arr, callback) {
    if (arr instanceof Array) {
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i], i, arr)) {
                return true;
            }
        }
        return false;
    }
    throw new Error(`${arr} isn't Array`)
}

console.log(some([1, 2, 3, 4, 5], (element) => element % 2 === 0 ));

