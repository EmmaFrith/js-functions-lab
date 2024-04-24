/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

/*
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
*/



/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

/*
const isAdult = (x) => {
    if (x >= 18) {
        return "adult"
    } else {
        return "minor"
    }
}
console.log('Exercise 2 Result:', isAdult(20));
*/



/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel and false otherwise. For the purposes of this exercise, the character y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

/*
isCharAVowel = (x) => {
    if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
        return true
    } else {
        return false
    }
}
console.log('Exercise 3 Result:', isCharAVowel("y"));
*/



/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

/*
const generateEmail = (name, email) => {
    return `${name}@${email}`   
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));
*/



/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a time of day (morning, afternoon, evening) and return a personalized greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

/*const greetUser = (name, time) => {
    return `Good ${time}, ${name}!`
}
console.log('Exercise 5 Result:', greetUser("Sam", "evening"));
*/



/*
Exercise 6: reverseString()

Define a function called reverseString. It should take a string and return it with its characters in reverse order. 

Example: reverseString('rockstar') should return the string "ratskcor".

Complete the exercise in the space below:
*/

/*
function reverseString(str) {
    let output = ""
    for (let i = str.length -1; i >= 0; i--){
        //console.log(i)
        output = output + str[i]
        //let currentCharacter = str[i]
        //console.log(currentCharacter)
        //output = output + currentCharacter
        //console.log(output)
    }
    return output
}
console.log('Exercise 6 Result:', reverseString("hello"));
*/


/*
Exercise 7: checkPalindrome()

Define a function called checkPalindrome. It should take a string and return true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.

Example: checkPalindrome('radar') should return true.
Example: checkPalindrome('taco') should return false.

Complete the exercise in the space below:
*/

/*
function checkPalindrome(str) {
    let string = ""
    for (let i = str.length -1; i >= 0; i--){
        string = string + str[i]
    }
    if (str === string) {
        return true;
    } else {
        return false;
       }
    }
console.log('Exercise 7 Result:', checkPalindrome("radar"));
*/


/*
Exercise 8: maxOfThree()

Define a function, maxOfThree. It should accept three numbers and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

/*
function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3){
        return num1;
    } else if (num2 > num1 && num3){
        return num2;
    }
    else {
        return num3;
    }
}

console.log('Exercise 8 Result:', maxOfThree(20, 10, 80));
*/


/*
Exercise 9: calculateTip()

Create a function called calculateTip. It should take two arguments: the bill amount and the tip percentage (as a whole number). The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

/* 
const calculateTip = (billamount, tippercentage) => {
    return billamount / 100 * tippercentage
}
console.log('Exercise 9 Result:', calculateTip(40, 10));
*/



/*
Exercise 10: convertTemperature()

Write a function named convertTemperature. It takes two arguments: a temperature and a string representing the scale ('C' for Celsius, 'F' for Fahrenheit). Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

/*
const convertTemperature = (temperature, scale) => {

    if (scale === "C"){
    return `The temperature in fahrenheit is ${(temperature * 9/5) + 32}`
    } else {
    return `The temperature in celcius is ${(temperature - 32) * 5/9}`
    }
}
console.log('Exercise 10 Result:', convertTemperature(30, "C"));
*/