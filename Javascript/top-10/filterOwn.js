Array.prototype.myFilter = function (callback) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            res.push(this[i])
        }
    }
    return res;
}


let res = arr.myFilter((item) => {
    return item > 4;
});

console.log(res);