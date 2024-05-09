// --- BOOLEAN results Trutht and Falsy Values
/* console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean({}));

const money = 150;
if (money) {
  console.log("Yeah, you have some money.");
} else {
  console.log("Bro, You are broken!");
}

let height = 0;
if (height) {
  console.log("heigth is DEFINED.");
} else {
  console.log("height is UNDEFINED!");
}  */





// --- EQUALITY OPERATORS == vs. ===
/* const age = '18';
if (age === 18) {
  console.log("You can Drink! (strick - compara valor e tipo).");
}

if (age == 18) {
  console.log("You can Drink! (loose - compara valor).");
}  */





// --- Convert Number(), toString()
/* const favorite = Number(prompt("Write your favorite number."));

console.log(favorite, typeof favorite);
console.log(Number(favorite));

if (favorite === 23) {
  console.log("Yeah, Types and Variables from prompt is a number 23.");
} else if (favorite === 7) {
  console.log("The number is 7.");
} else if(favorite === 9) {
  console.log("Your number is 9.");
} else {
  console.log("Your number is not 7, 9 or 23.");
}

if (favorite !== 23) console.log("Why is not 23?");  */





// Logical Operators
/* const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);


if (hasDriverLicense && hasGoodVision) {
  console.log("Yeah, you are able to drive.")
} else {
  console.log("Ops, you are not able to drive.")
}

const isTired = true;
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("She can Drive, she is not tired.")
} else {
  console.log("You are tired, don't drive, please.")
} */

// Challenge
/* const scoreDolphins = (98 + 87 + 108) / 3;
const scoreKoalas = (89 + 94 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);
console.log(Math.trunc(scoreDolphins), Math.trunc(scoreKoalas));

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins wins the Trophy!");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("Koalas wins the Trophy!");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log("Both win the Trophy.");
} else {
  console.log("No one wins...");
} */





//Percorrer array
/* const week = ["Sunday", "Monday", "Tuesday", "Wednesday",  "Thursday" , "Friday" , "Saturday"];
week.forEach((e) => console.log(e));  */

// SWITCH Statement
const day = "wednesday";

switch (day) {
  case "sunday":
    console.log("Today is Sunday.");
    console.log("Make every move slow.");
  break;
  case "monday":
    console.log("Monday dude. You drink to much yesterday, today no sucker!");
    console.log("Is a good idea u get some diving time.");
  break;
  case "tuesday":
    console.log("Hey, come down. Is Tuesday! Drink if u stress only.");
    console.log("calm down, your liver and kidney aren't made of steel!");
  break;
  case "wednesday":
    console.log("Fuck u... We will lost the deadline. Is wednesday.");
    console.log("Do not Fuck with all.");
  break;
  case "thursday":
    console.log("Ha. Thursday suckers!!!!");
    console.log("Let's have a beer.");
  break;
  case "friday":
    console.log("It's just send. Is Friday, not talk to me anymore, please.");
    console.log("Relax, drink water...");
  break;
  case "saturday":
    console.log("Real? I need Saturday all day long! For Real.");
    console.log("Just go.");
  break;
  default:
    console.log("default");
}

