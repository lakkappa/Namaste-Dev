let arr = [2, 4, 0, 6, 0, 8, 10];
//ooutput arr=[2,4,6,8,10,0,0];

let res = arr.filter((item) => {
    return item !== 0;
})
let fillArr = Array(arr.length - res.length).fill(0);
let finalRes = res.concat(fillArr);
console.log(finalRes);