const fruits = ["banana", "apple", "orange", "apple", "banana", "apple"];

function fn(f) {
    return f.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
}

const res = fn(fruits)
console.log(res);
