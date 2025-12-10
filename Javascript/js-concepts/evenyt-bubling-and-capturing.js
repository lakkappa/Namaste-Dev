const demo = "Hello World";
console.log(demo);

document.getElementById("grand").addEventListener('click', (e) => {
    console.log('grand clicked');

}, false)
document.getElementById("parent").addEventListener('click', (e) => {
    console.log('parent clicked');

}, true)
document.getElementById("child").addEventListener('click', (e) => {
    console.log('child clicked');
}, false)


// event starts from the target element and bubbles up to its ancestors.
// hink: child → parent → grandparent → ...

//2. Event Capturing
//Event flows from the top of the DOM down to the target element.
// Think: document → html → body → parent → child
//To use capturing, you must pass a third argument true in addEventListener
