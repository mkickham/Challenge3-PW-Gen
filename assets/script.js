// Assignment Code

// sets all the acceptable characters
var charset = "";
var SpecChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "?"];
var NumChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var LowerCase = ["a", "b", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log("Clicked Button")
  return "Password Generated";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function choices(){
  var length = prompt("How long do you want your password to be?");
  length = parseInt(length);
  if (length < 8){
    alert("Password is not sufficient length")
    return;
  }
  if (length > 12){
    alert("Password is too long")
    return;
  }

  var SpecChar = confirm("Would you like a special character?")
  var NumChar = confirm("Would you like a number?")
  var UpperCase = confirm("Would you like an uppercase letter?")
  var LowerCase = confirm("Would you like a lower case letter?")

  var choices = {
    length: length,
    SpecChar: SpecChar,
    NumChar: NumChar,
    UpperCase: UpperCase,
    LowerCase: LowerCase,
  }
  console.log(choices);
  return choices;
}

function generatePassword(){
  var options = choices()
  var newPassword = []
  var possiblePass = []
  if (options.SpecChar) {
    possiblePass = possiblePass.concat(SpecChar);
    possiblePass.push(shuffle(SpecChar));
  }
  
  if (options.NumChar){
    possiblePass = possiblePass.concat(NumChar);
    possiblePass.push(shuffle(NumChar));
  }
  
  if (options.UpperCase) {
    possiblePass = possiblePass.concat(UpperCase);
    possiblePass.push(shuffle(UpperCase));
  }
  
  if (options.LowerCase) {
    possiblePass = possiblePass.concat(LowerCase);
    possiblePass.push(shuffle(LowerCase));
  }

  for(var i = 0; i < choices.length; i++){
    var readyArray = shuffle(possiblePass);
    newPassword.push(readyArray);
  }

  console.log(newPassword)
  return newPassword.join("")

}

function getRandom(possiblePass){
  var possiblePass = Math.floor(Math.ramdom() * possiblePass.length);
  return possiblePass.charAt(randomIndex);
}