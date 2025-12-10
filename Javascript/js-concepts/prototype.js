//This is a prototype inheritance chain
let arr = ["akshay", "aditya"];
let object = {
    name: "akshay",
    city: "dehradun",
    getInfo: function () {
        return this.name + " from " + this.city + " " + this.age;
    }
}

let object2 = {
    name: "Aditya",
    age: 25
}

object2.__proto__ = object

console.log(object.getInfo());
console.log(object2.getInfo());


// Prototype Inheritance	Objects inherit from other objects
// Inheritance Chain	JS walks up the chain to find properties
// Used for	Code reuse(methods, shared behavior)
// Mechanism	Via __proto__ or Object.create()
// Class Syntax(ES6)	Sugar over prototype inheritance
