// Assignment Code
var generateBtn = document.querySelector("#generate");

// will have to make arrays of lower and upper letters, numbers , and symbols
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
var lowerCase = "abcdefghijklmnopqrstuvwxz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()-+?";
// make generatePassword function
function generatePassword() {
  var length = 8,
    retVal = "";
  for (var i = 0, n = upperCase.length; i < length; ++i) {
    retVal += UpperCase.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// prompt for password length is a number
// confirm for lowercase, uppercase, numeric and special characters
// if statement i number is above 8 && below 128
// store there response in a variable
// if statement for each confirm and if it is a yes or true I would push or add ransom characters to a big array of all characters selected so far.
// for loop while i is less than there answer for num length prompt
//in this for loop we would randomly pull characters from the big array
//pull random characters from the array using math.random 
//have a var declared above for loop
//that var += theRandomChar
//return the password var


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
