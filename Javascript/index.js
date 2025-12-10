const a = 10;
console.log('This is this keyword in JS')
console.log(this);
console.log(a);


const demo = "Hello World";
console.log(demo);

//call, bind and apply methods

//call = function borrowing

let name = {
    name: 'lucky',
    lastname: 'pujari',
    // getFullName: function (city, state) {
    //     console.log(this.name + " " + this.lastname + " " + city + " " + state);
    // }
}

let getFullName = function (city, state) {
    console.log(this.name + " " + this.lastname + " " + city + " " + state);
}

let name2 = {
    name: "geeta",
    lastname: "adavi"
}
// for call, we can use the comma seprated string
getFullName.call(name, "Bangalore", "KA");

//for apply, we have to use array of strings.
getFullName.apply(name2, ["Bijapur", "Karnataka"]);

//for bind, first it will copy of the method, then it will bind the method.
//It will not call directly, first bind later will invoke the method.
let printName = getFullName.bind(name2, "mumbai", "maharashtra");
console.log(printName);
printName();
