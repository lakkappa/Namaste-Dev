function fn(arr) {
    let max = -Infinity;
    let sMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            sMax = max;
            max = arr[i];
        }
        else if (arr[i] != max && arr[i] > sMax) {
            sMax = arr[i];
        }
    }
    return sMax;
}

const res = fn([2, 5, 6, 8, 3, 3, 2, 1, 10, 0, 20, -1]);
console.log(res);