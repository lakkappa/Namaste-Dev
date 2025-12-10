function myFunc(str) {

    let newStr = [];
    for (let i = str.length - 1; i >= 0; i--) {

        if (str[i].match(/[a-zA-Z]/)) {
            newStr.push(str[i])//d,l,r
        }
    }

    let result = ""
    let index = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-zA-Z]/)) {
            result += newStr[index]
            index++
        } else {
            result += str[i]
        }
    }

    console.log(newStr, result);
    return result
}




let str = 'Hello! world!';
//"olleH! dlrow!"
let strWords = str.split(" ")
let r = ""
for (let i = 0; i < strWords.length; i++) {
    r += myFunc(strWords[i]) + " "

}
console.log(r)


// reverse sentence not special character
// input Hello! world!
// ouput olleH! dlrow!
let s = "!kashi.  @llllkkii"
// function reverse(str,start,end){
//     str = str.split("")
//     while(start<end){
//         if(!str[start].match(/[a-zA-Z]/)){
//             start++
//         }else if(!str[end].match(/[a-zA-Z]/)){
//             end--
//         }else{
//              [str[start],str[end]]=[str[end],str[start]]
//             start++
//             end--
//         }

//     }
//     return str.join("")
// }

// let r = reverse(s,0,s.length-1)
// console.log(r)




//const res = myFunc(str);
// console.log(res);

// new way using the while loop
let newstr = str.split('');
while (start < end) {
    newstr[start, end] = newstr[end, start];
    start++;
    end--;
}
console.log(newstr.join(''), start, end);