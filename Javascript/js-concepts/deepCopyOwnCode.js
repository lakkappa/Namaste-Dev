// deep copy
let obj = {
    name: "lakkappa",
    age: 20,
    address: {
        city: "bangalore"
    }
}

function shallowCopy(obj) {

    if (typeof (obj) !== 'object') {
        return obj;
    }

    let copyObj = {};

    for (let key in obj) {
        copyObj[key] = shallowCopy(obj[key]);
    }

    return copyObj;
}

let res = shallowCopy(obj);
res.age = 30;
res.address.city = "bijapur";
console.log(res);
console.log(obj);