// palindrome or not
// input madam || cat
// output true || false

function myFunc(str) {
    let palindrom = str.split('').reverse().join('');
    if (str === palindrom) {
        return true;
    }
    else {
        return false;
    }
}

let str = 'laal laal';
const res = myFunc(str);
console.log(res);