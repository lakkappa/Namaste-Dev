
function isValid(str) {
    let stack = [];
    let mymap = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    for (let char in str) {
        if (str[char] === "(" || str[char] === "[" || str[char] === "{") {
            stack.push(str[char]);
        }
        else {
            if (stack.pop() != mymap[str[char]]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}


console.log(isValid("(]"));     // false
console.log(isValid("([])"));   // true
console.log(isValid("{[]}"));   // true
console.log(isValid("([)]"));   // false
console.log(isValid("()[]{}")); // true