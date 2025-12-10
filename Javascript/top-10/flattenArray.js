// Flatten Array
function flattenArray(newArr, res) {

    for (let i = 0; i < newArr.length; i++) {
        if (typeof (newArr[i]) === 'object') {
            flattenArray(newArr[i], res)
        }
        else {
            res.push(newArr[i])
        }
    }
    return res;
}


const arr = [1, 2, [3, 4], [5, [6, [7, 8]]], 9, 10];

const output = flattenArray(arr, []);
console.log(output);