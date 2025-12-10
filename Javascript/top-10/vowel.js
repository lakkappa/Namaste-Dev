// Count the vowel in string on sentance.
// input = Apple
// output = 2;

function myFunc(str) {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowel.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}

let str = 'GEETA';
const res = myFunc(str);
console.log(res);