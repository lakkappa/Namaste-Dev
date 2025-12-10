function fn(f) {
    const result = new Set(f);
    console.log([...result]);
}

const arr = [1, 2, 2, 3, 4, 4]
const res = fn(arr);
console.log(res);


// Remove Duplicates from an Array
// [1, 2, 2, 3, 4, 4]
//o/p [1,2,3,4];


function fn(f) {

    const results = f.reduce((acc, curr) => {
        if (!acc.includes(curr)) {
            acc.push(curr)
        }
        return acc;;
    }, []);
    return results;
}

const arr1 = [1, 2, 2, 3, 4, 4]
const res1 = fn(arr1);
console.log(res1);




function fn(f) {

    const result = f.filter((item, index, arrayVal) => {
        if (arrayVal.indexOf(item) === index) {
            return arrayVal;
        }
    });
    return result;
}

const arr2 = ["banana", "apple", "banana", "apple", "mango"]
const res2 = fn(arr2);
console.log(res2);

// Remove Duplicates from an Array
// [1, 2, 2, 3, 4, 4]
//o/p [1,2,3,4];



// Using the filter logic, we can do following questions
// 1. Remove duplicate array elements like string or numbers
// 2. Remove dubplicate characters in the given string
