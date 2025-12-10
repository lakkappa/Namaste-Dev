function sortedArr(arr) {
    arr.sort((a, b) => {
        // return b.age - a.age;
        return b.score - a.score;
    })
    return arr.map((item) => {
        return item.name + " " + item.lastname;
    });
}



let usr = [
    {
        "name": "kashi1",
        "age": 20,
        "lastname": "adv",
        "score": 120
    },
    {
        "name": "kashi2",
        "age": 40,
        "lastname": "adv",
        "score": 100
    },
    {
        "name": "kashi3",
        "age": 30,
        "lastname": "adv",
        "score": 150
    },
    {
        "name": "kashi4",
        "age": 60,
        "lastname": "adv",
        "score": 180
    }
]

let res = sortedArr(usr);
console.log(res);
