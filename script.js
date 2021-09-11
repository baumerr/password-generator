var passLength = 0;
var upperCase = true;
var numbers = true;
var specialChar = true;

// Assignment code here
function getInputs () {
  passLength = window.prompt("How many characters would you like your password to be? Remember to choose between 8 and 128!");
  var type = typeof(passLength);
  //change string to integer
  passLength = parseInt(passLength);
  //if characters are less than 8 or more than 128 repeat process
  if (passLength < 8 || passLength > 128) {
    window.alert("Did I stutter? Your password has to be between 8 and 128 characters!");
    getInputs ();
  }
  // do you want upper case?
  upperCase = window.confirm("Do you want your password to include UPPER CASE letters? Click 'OK' for yes and 'Cancel' for no.");

  // do you want numbers?
  numbers = window.confirm("Do you want your password to include numbers? Click 'OK' for yes and 'Cancel' for no.");
  // do you want special characters?
  specialChar = window.confirm("Do you want your password to include special characters? Click 'OK' for yes and 'Cancel' for no.");
}

function generatePassword () {
  getInputs ();

  var pickedInputs = ["abcdefghijklmnopqrxtuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "1234567890", "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"];

  // if statements to see what parts of the array we should erase based on user input - i realize these are messy but im not sure how to fix them
  if (!upperCase) {
    pickedInputs.splice(1,1);
    if(!numbers) {
      pickedInputs.splice(1,1);
      if(!specialChar) {
        pickedInputs.splice(1,1);
      }
    }
    if(!specialChar) {
      pickedInputs.splice(2,1);
    }
  }
  if(!numbers) {
    pickedInputs.splice(2,1);
    if(!specialChar) {
      pickedInputs.splice(2,1);
    }
  }
  if(!specialChar) {
    pickedInputs.splice(3,1);
  }

  // function to choose a random item in our array of characters
  function getRandomChar (pickedInputs) {
    const randomIndex = Math.floor(Math.random() * pickedInputs.length);

    const item = pickedInputs[randomIndex];

    return item;
  }

  var chosenInput = getRandomChar(pickedInputs);

  var pass = "";
  // loop to choose random character in our array item
  for (var i = 0; i < passLength; i++) {
    var chosenInput = getRandomChar(pickedInputs);
    pass += chosenInput.charAt(Math.floor(Math.random()* chosenInput.length));
  }
  return pass;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);