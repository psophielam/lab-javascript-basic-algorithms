// Iteration 1: Names and Input

let hacker1 = "Sophie";
console.log(`The driver\'s name is ${hacker1}.`);
let hacker2 = "Thomas"; 
console.log(`The navigator\'s name is ${hacker2}.`);


// Iteration 2: Conditionals

if ( hacker1.length > hacker2.length ) {
    console.log (`The driver has the longest name, it has ${hacker1.length}characters`);
  } else if (hacker2.length > hacker1.length) {
    console.log (`It seems the navigator has the longest name, it has ${hacker2.length} characters`);
  } else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  } else {
    console.log('invalid');
  }
  
// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let hacker1Array = hacker1.split("");
let hacker1Modified = "";
for (let i = 0; i<hacker1Array.length; i++) {
  if (i>0) {
  hacker1Modified += " "; }
  hacker1Modified += hacker1Array[i].toUpperCase();
}
console.log(hacker1Modified);

/* SECOND METHOD
hacker1 = hacker1.split("").join(" ");
console.log(hacker1);
hacker1 = hacker1.toUpperCase();
console.log(hacker1);

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
function reverseString(hacker2) {
    return hacker2.split("").reverse().join("");
}
let hacker2inverted = reverseString(hacker2);
console.log(hacker2inverted);

*/ 
let hacker2Array = hacker2.split("");
let hacker2Modified = "";
for (let i = hacker2Array.length -1; i>=0; i--) {
  hacker2Modified += hacker2Array[i];
}
console.log(hacker2Modified);

console.log(hacker1.localeCompare(hacker2)); // Returns -1 if str1 is less than str2. s<t

