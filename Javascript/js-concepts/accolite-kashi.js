
 //Input: 
// let promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)); 
// let promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))

// var addTwoPromises = async function(promise1, promise2) {
//     //return new Promi
    
//     return Promise.all([promise1,promise2])
//     .then((res)=>res.reduce((acc,curr)=>{
//         acc += curr
//         return acc
//     },0))
    
//     //console.log(res)
// };


// const res = addTwoPromises(promise1,promise2)
// res.then((data)=>console.log(data))

// Output: 7Explanation:
// The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.
 




// for (var i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }

// //2
// //2
// //2
 
 
 
// // let x = '{ "b": 1, "c": 2 }';
// // let y = JSON.parse(x);// {"b": 1, "c": 2 }
// // console.log(typeof y);//object
 
 
// let x = "5";
// let y = 2;
 
// console.log(x + y);//52
// console.log(x - y);//3







let a = 1;
function modify() {
  a = 2;
}
modify();
console.log(a);
 
 
 
 

// let nums = [0,0,1,1,1,2,2,3,3,4]

// //nums = [0,1,2,3,4,_,_,_,_,_]

// const removeDuplicates=(nums)=>{
//     let result =[]//[]
//     for(let i=0;i<nums.length;i++){
//         //console.log(result[i-1] ,nums[i])
//         if((nums[i-1] !== nums[i])){
//             result.push(nums[i])
//             //nums[i] = nums[i]
           
//         }
//         //  i++
//         // 
//     }
//     return result
// }

// const res = removeDuplicates(nums)
// // console.log(res)