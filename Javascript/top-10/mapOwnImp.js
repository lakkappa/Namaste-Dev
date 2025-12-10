
let arr = [2, 4, 6, 8, 10];

Array.prototype.myMap = function (callback) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        res.push(callback(this[i]));
    }
    return res;
}


let res = arr.myMap((item) => {
    return item * 10;
});

console.log(res);

