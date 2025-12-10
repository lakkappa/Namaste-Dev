// shallow copy
let obj = {
    name: "lakkappa",
    age: 20,
    address: {
        city: "bangalore"
    }
}

function shallowCopy(obj) {
    let copyObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        copyObj[key] = obj[key];
    }
    return copyObj;
}

let res = shallowCopy(obj);
res.age = 30;
console.log(res);
console.log(obj);