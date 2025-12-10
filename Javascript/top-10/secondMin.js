function fn(arr) {
    let min = Infinity;
    let sMin = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            sMin = min;
            min = arr[i];
        }
        else if (arr[i] != min && arr[i] < sMin) {
            sMin = arr[i];
        }
    }
    return sMin;
}

const res = fn([2, 5, 6, 8, 3, 3, 2, 1, 10, 0, 20, -1]);
console.log(res);