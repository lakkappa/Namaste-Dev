const demo = "Hello World";
console.log(demo);

//call, bind and apply methods

//call = function borrowing

let obj1 = {
    name: 'lucky',
    lastname: 'pujari',
    // getFullName: function (city, state) {
    //     console.log(this.name + " " + this.lastname + " " + city + " " + state);
    // }
}

let getFullName = function (city, state) {
    console.log(this.name + " " + this.lastname + " " + city + " " + state);
}

let obj2 = {
    name: "geeta",
    lastname: "adavi"
}
// for call, we can use the comma seprated string
getFullName.call(obj1, "Bangalore", "KA");

//for apply, we have to use array of strings.
getFullName.apply(obj2, ["Bijapur", "Karnataka"]);

//for bind, first it will copy of the method, then it will bind the method.
//It will not call directly, first bind later will invoke the method.
let printName = getFullName.bind(obj1, "mumbai", "maharashtra");
console.log(printName);
printName();
