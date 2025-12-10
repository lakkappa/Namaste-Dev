1. How does JavaScript handle asynchronous code?
Through callbacks, Promises, and async/await.

async function getData(){
    try{
        const res = await fetch("/");
        const data = await res.json();
    }catch(err){
        console.error(err);
    }
}


2. What is a closure?
A closure is a function that remembers its lexical scope even when the function is executed outside that scope.

function outer(x){
    return function inner(y){
        console.log(x+y);
    }
}

let res = outer(10);
console.log(res(20));


3. Debounce vs Throttle functions
Debounce: Waits for a pause in calls.
usecase: Search input, resize events, validation

Throttle: Limits calls to one per interval.
Scroll, resize, mouse move

Debounce:
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function searchQuery(query) {
  console.log("Searching for:", query);
}

const input = document.getElementById("search");
input.addEventListener("input", debounce((e) => {
  searchQuery(e.target.value);
}, 500));

Throttling:
function throttle(fn, interval) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}

function logScroll() {
  console.log("Scroll position:", window.scrollY);
}

window.addEventListener("scroll", throttle(logScroll, 200));


4. array & object destrcuring:
// array destrcuring
let arr=["lucky", "geeta", "pujari"];
const[a,b,c] = arr;
console.log(a,b,c);

// object destrcuring
let obj={name:"lakkappa", lastname:"pujari", age:25};
const {name, lastname, age} = obj;
console.log(name, lastname, age);