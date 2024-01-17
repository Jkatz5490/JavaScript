"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`);

// const interface = `Audio`;
// const private = 534;
// const if = 23;
*/
/*
// Functions
function logger() {
    console.log(`My name is Jonas`);
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
// Function declaration
// can call function delcaration before you define it
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// console.log(age1);

// Function expression
// cannot be called before you define it
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);
*/

/*
//Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retired in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1980, `Bob`));
*/
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/
// alt + arrowup (moves line up)
/*
const calcAge = (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retired in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`)
        return -1;
    }

    // return `${firstName} retired in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1950, `Mike`));
*/
// Challenge 5
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win the trophy. (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}) `)
    } else {
        console.log(`No team wins....`)
    }
}

checkWinner(scoreDolphins, scoreKoalas)
checkWinner(500, 100)

// Test 2
scoreDolphins = calcAverage(85, 54, 42);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreDolphins);
checkWinner(scoreDolphins, scoreKoalas);
*/
/*
const friend1 = `Michael`;
const friend2 = `Steven`;
const friend3 = `Peter`;

const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);


console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = `Jay`;
console.log(friends);
// cannot reassign array
// friends = [`Bob`, `Alice`];
const firstName = `Jonas`;
const jonas = [firstName, `Schmedtmann`, 2037 - 1991, `Teacher`, friends];
console.log(jonas);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[years.length - 1])]
console.log(ages)
*/
/*
const friends = [`Michael`, `Steven`, `Peter`];
const newLength = friends.push(`Jay`);
console.log(friends);
console.log(newLength);

friends.unshift(`John`);
console.log(friends);

// Remove elements 
friends.pop();
const popped = friends.pop(); // Last
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf(`Steven`));
console.log(friends.indexOf(`Bob`)); // not there so returns -1

friends.push(23);
console.log(friends.includes(`Steven`));
console.log(friends.includes(23)); // Tests with strict equality

if (friends.includes(`Steven`)) {
    console.log(`You have a friend called Peter`);
}
*/
/*
// Coding challenge 6
console.log(`Method using shorthand of a function: `)
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(bills, tips)

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills, tips, totals);

// same method different way
console.log(`Same method different way (using longhand method): `)
const calcTip2 = function (bill2) {
    if (bill2 >= 50 && bill2 <= 300) {
        bill2 * 0.15;
    } else {
        bill2 * 0.2;
    }
}
const bills2 = [125, 555, 44];
const tips2 = [calcTip(bills2[0]), calcTip(bills2[1]), calcTip(bills2[2])]
console.log(bills2, tips2)

const totals2 = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills2, tips2, totals2);
*/

/*

const jonas = {
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    age: 2037 - 1991,
    job: `Teacher`,
    friends: [`Michael`, `Peter`, `Steven`]
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas[`lastName`]);

const nameKey = `Name`;
console.log(jonas[`first` + nameKey])
console.log(jonas[`last` + nameKey])

const interestedIn = prompt(`What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends.`)
console.log(jonas[interestedIn]);

if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);
} else {
    console.log(`Wrong request! Choose between firstName, lastName, age, job and friends.`)
}

jonas.location = 'Portugal';
jonas[`twitter`] = `@Jonasschmedtmann`;
console.log(jonas);

// Chalnnge
// `Jonas has 3 friends, and his best friend is called Michael`

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/
/*
const jonas = {
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    birthYear: 1991,
    job: `Teacher`,
    friends: [`Michael`, `Peter`, `Steven`],
    hasDriversLicense: true,

    // calcAge: function(birthYear){
    //     return 2037 - 1991;
    // }
    calcAge: function(){
        // console.log(this);
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} year old ${jonas.job}, and he has ${this.hasDriversLicense ? `a` : `no`} driver's license.`
    }
};

// console.log(jonas.calcAge(1991));
console.log(jonas.calcAge())

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary())
*/
/*
// Challenge 7

const mark = {
    fullName: `Mark Miller`,
    mass: 78,
    height: 1.69, 
    calcBMI: function(){
        // console.log(this);
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const john = {
    fullName: `John Smith`,
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        // console.log(this);
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi);
console.log(john.bmi);

if(mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if(mark.bmi < john.bmi){
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
*/

// console.log(`Lifting weights repetition 1`);
// console.log(`Lifting weights repetition 2`);
// console.log(`Lifting weights repetition 3`);
// console.log(`Lifting weights repetition 4`);
// console.log(`Lifting weights repetition 5`);
// console.log(`Lifting weights repetition 6`);
// console.log(`Lifting weights repetition 7`);
// console.log(`Lifting weights repetition 8`);

// for loop keeps running while condition is true
/*
for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep}`);
}
*/

/*
const jonas = [
    `Jonas`,
    `Schmedtmann`,
    2037-1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`],
    true
];
const types = [];

for(let i = 0; i < jonas.length; i++){
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++){
    ages.push(2037 - years[i])
}
console.log(ages);

// continue and break
console.log(`----- ONLY STRINGS -----`);
for(let i = 0; i < jonas.length; i++){
    if(typeof jonas[i] !== `string`) continue;
    console.log(jonas[i], typeof jonas[i]);
}

console.log(`----- BREAK WITH NUMBER -----`);
for(let i = 0; i < jonas.length; i++){
    if(typeof jonas[i] === `number`) break;
    console.log(jonas[i], typeof jonas[i]);
}
*/
/*
const jonas = [
    `Jonas`,
    `Schmedtmann`,
    2037-1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`]
];
for (let i = jonas.length - 1; i >= 0; i--){
    console.log(jonas[i]);
}

for(let exercise = 1; exercise < 4; exercise++){
    console.log(`----------- Starting exercise ${exercise}`);

    for(let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
    };
}
*/
/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`);
}
*/
// Test data
const bills = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52
];

const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    console.log(calcTip(bills[i]));
    tips.push(calcTip(bills[i]));
    // totals.push(tips[0] + bills[0]);
    totals.push(tips[i] + bills[i])
}
// for (let i = 0; i < bills.length; i++) {
//     totals.push(tips[i] + bills[i]);
// }
console.log(`bills: ${bills}`);
console.log(`tips: ${tips}`);
console.log(`totals: ${totals}`);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(bills));
console.log(calcAverage(totals));
console.log(calcAverage(tips));




