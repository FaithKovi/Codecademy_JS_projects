// My current age.
const myAge = 22;
let earlyYears = 2;
earlyYears *= 10.5;

// Account for the first 2 years.
let laterYears = earlyYears - 2;

// Number of dog years accounted for by my later years.
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// My current age in dog years.
let myAgeInDogYears = earlyYears + laterYears;
const myName = 'Faith';
console.log(myName.toLowerCase());
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);