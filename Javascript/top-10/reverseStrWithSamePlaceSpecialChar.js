

function capitalizedWords(str) {
    function fn(value, start, end) {
        value = value.split('');
        while (start < end) {
            if (!value[start].match(/[a-zA-Z]/)) {
                start++;
            }
            else if (!value[end].match(/[a-zA-Z]/)) {
                end--;
            }
            else {
                [value[start], value[end]] = [value[end], value[start]];
                start++;
                end--;
            }
        }
        return value.join('');
    }

    return str.split(' ').map((item) => {
        //   return item.trim();
        return item.trim() ? fn(item, 0, item.length - 1) : item;
    }).join(" ");
}

let str = "!hello! gee!ta, how! are! you!"
console.log(str);
const res = capitalizedWords(str)
console.log(res);
// console.log(res.length);