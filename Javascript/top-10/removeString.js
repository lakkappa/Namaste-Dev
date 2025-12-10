// new and best logic
let newstr = str.split("").filter((item, index, newStr) => {
    if (newStr.indexOf(item) === index) {
        return newStr;
    }
});
return newstr.join("");


function removeDuplicates(str) {
    let setStr = new Set();
    let res = '';
    for (let i of str) {
        if (!setStr.has(i)) {
            res += i;
            setStr.add(i);
        }
    }
    return res;
}

console.log(removeDuplicates("adhar"));