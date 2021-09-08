// Assignment code here
function getInputs () {
  var length = window.prompt("How many characters would you like your password to be?");
  length = parseInt(length);
}

function generatePassword () {
  getInputs ();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(length);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// the generatePassword function should use all of your inputs to generate you a password

// so there should be a function that is used that asks you all the questions and stores them in various variables

// 