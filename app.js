//------------- ------------ ------- This is an OLD way
let user = {
    name0: "Hadi",
    age: 20,
    class: 13
}
let name1 = user.name0;
let age1 = user.age;
let class1 = user.class;
console.log(name1, age1, class1);



//------------- ------------ ------- This is an NEW (ES6) way
let user2 = {
    name2: "Hasan",
    age2: 21,
    class2: 14
}
let {name2, age2, class2} = user2;   // Short code
console.log(name2, age2, class2);



let user3 = {
    name3: "Raza",
    age3: 22,
    class3:15
}
// ------------ ------------ ------- Changed Default values using ":"
let {name3: myName, age3: myAge, class3: myClass} = user3;
console.log(myName, myAge, myClass);



// ----------Use Destructuring Assignment to Assign Variables from Nested Objects
let bikes = {
    suzuki: {
        gixer: "10R",
        busa: "20R",
    }
}
let {suzuki: {gixer, busa}} = bikes;
console.log(gixer, busa);



//----------------------------------------------- HARD way to make same properties and values Objects
let myObj = {
    myFirstName: myFirstName,
    myLastName: myLastName
}
//----------------------------------------------- EASY way to make same properties and values Objects
let myObj1 = {
    myFirstName,         // The value of myLastName is the same as myFirstName
    myLastName           // The value of myLastName is the same as myLastName
}