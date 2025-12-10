// Function currying is a technique, where a function doesn't take all its arguments at once.
// Instead, it takes the first argument, returns a new function that takes the second argument, and so on — until all arguments have been provided.



// function curying using the bind method.
let multiply = function (x, y) {
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 5);
multiplyByThree(5)



// function curying using the closue functions.
let addNos = function (x) {
    return function (y) {
        console.log(x + y);
    }
}

let addTwoNos = addNos(2);
addTwoNos(2)

let addThreeNos = addNos(3);
addThreeNos(3)