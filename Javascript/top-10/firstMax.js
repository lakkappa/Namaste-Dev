function fn(arr) {
    let max = arr[0];
    return arr.reduce((acc, curr) => {
        if (acc < curr) {
            acc = curr;
        }
        return acc;
    }, max);
}

const res = fn([2, 5, 6, 2, 4, 1, 0]);
console.log(res);