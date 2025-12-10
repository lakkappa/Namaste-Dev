function flattenObj(obj, key, res) {
    for (let i in obj) {
        let fullKey = key ? `${key}-${i}` : i
        if (typeof (obj[i]) === 'object') {
            flattenObj(obj[i], fullKey, res)
        }
        else {
            res[fullKey] = obj[i];
        }
    }
    return res;
}

const obj1 = { a: 1, b: { b: 2 }, c: 3, d: { d: 4, e: { e: 5, f: { f: 6 } } }, z: 100 };
const res = flattenObj(obj1, "", {});
console.log(res);