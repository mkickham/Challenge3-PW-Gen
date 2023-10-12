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

function generatePassword(){
  var length = parseInt(prompt("Enter a password that is 10-12 symbols in length"));

}

var SpecChar = confirm("Enter a special character")
var NumChar = confirm("Enter a number")
var UpperCase = confirm("Enter an uppercase letter")
var LowerCase = confirm("Enter a lower case letter")