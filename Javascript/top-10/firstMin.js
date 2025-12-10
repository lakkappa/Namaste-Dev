function fn(arr) {
    let min = arr[0];
    return arr.reduce((acc, curr) => {
        if (acc > curr) {
            acc = curr;
        }
        return acc;
    }, min);
}

const res = fn([2, 5, 6, 2, 4, 1, 0]);
console.log(res);