// Udemy: The Complete JavaScript Course 2024: From Zero to Expert!

/* */
/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);
*/

// using typeof to get the type in javascript console

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// dynamic typing example

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

// empty variable will hold the value of undefined
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null)
*/
/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1992;

// const job;
var job = 'programmer';
job = 'teacher';
*/
// don't do this, always declare variables
/*
lastName = 'Schmedtmann';
console.log(lastName);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName)

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y)
const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge)
*/
/* 
-----------------------------------------------------
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
------------------------------------------------------
*/

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
year = 2037

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string using backticks...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);
*/

/*
const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving license 😊`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}
let century;
const birthYear = 2000;
if (birthYear < 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/
// --------------------------------------------
/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
*/
/* Write your code below. Good luck! 🙂 */
/*
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's!`)
}
*/
// --------------------------------------------
/*
// type conversion
const inputYear = `1991`;
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18);

console.log(Number(`Jonas`))
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion

console.log(`I am ` + 23 + ` years old`);
console.log(`23` - `10` - 3)
console.log(`23` / `2`)

let n = `1` + 1;
n = n - 1; // minus operator converts it to a number
console.log(n);
*/

// 5 falsy values: 0, '', undefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(``));
console.log(Boolean(`Jonas`));
console.log(Boolean({}));

const money = 100;
if (money) {
    console.log(`Don't spend it all ;)`);
} else {
    console.log(`You should get a job!`);
}

let height = 0;
if (height) {
    console.log(`YAY! Height is defined`);
} else {
    console.log(`Height is UNDEFINED`);
}
*/

// in general always use strict conversion: === !==
/*
const age = `18`;
if (age === 18) console.log(`You just became an adult :D (strict)`);

if (age == 18) console.log(`You just became an adult :D (loose)`);

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log(`Cool! 23 is an amazing number!`);
} else if (favorite === 7) {
    console.log(`7 is also a cool number`);
} else if (favorite === 9) {
    console.log(`9 is also a cool number.`);
} else {
    console.log(`Number is not 23 or 7`);
}
if (favorite !== 23) console.log(`Why not 23?`);
*/
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;
// if (hasDriversLicense && hasGoodVision) {
//     console.log(`Sarah is able to drive!`);
// } else {
//     console.log(`Someone else should drive...`);
// }
const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired)

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`Someone else should drive...`);
}

// Coding challenge 3 

const scoreDolphins = (96 + 108 + 89) / 3
const scoreKoalas = (88 + 91 + 110) / 3

if (scoreDolphins > scoreKoalas) {
    console.log(`Dolphins win the trophy`)
} else if (scoreDolphins === scoreKoalas) {
    console.log(`Both win the trophy`)
} else {
    console.log(`Koalas win the trophy`)
}
*/

/*
const day = `friday`;
// must break or it continues executing code downward
// Switch statements
switch (day) {
    case `monday`: // day === `monday`
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case `tuesday`:
        console.log(`Prepare theory videos`);
        break;
    case `wednesday`:
    case `thursday`:
        console.log(`Write code examples`);
        break;
    case `friday`:
        console.log(`Record videos`);
        break;
    case `saturday`:
    case `sunday`:
        console.log(`enjoy the weekend`);
        break;
    default:
        console.log(`Not a valid day!`);
}

if (day === `monday`) {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
} else if (day === `tuesday`) {
    console.log(`Prepare theory videos`);
} else if (day === `wednesday` || day === `thursday`) {
    console.log(`Write code examples`);
} else if (day === `friday`) {
    console.log(`Record videos`);
} else if (day === `saturday` || day === `sunday`) {
    console.log(`enjoy the weekend`);
} else {
    console.log(`Not a valid day!`);
}
*/
/*
const age = 23;
// age >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to drink water`);

// expression because it produces a value
const drink = age >= 18 ? `wine` : `water`;
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = `wine`;
} else {
    drink2 = `water`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`)
*/
// tertiary command
/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);
*/