// Created array's for each type
var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowerString = "abcdefghijklmnopqrstuvwxyz";
var lowerArray = lowerString.split("");
var upperString = lowerString.toUpperCase();
var upperArray = upperString.split("");
var specialArray = ["@", "!", "#"];
var totalArray = []
//grabs button from html page
var generateBtn = document.querySelector("#generate");
function askUser() {
  var passLength = parseInt(window.prompt("How long do you want your password to be?"));
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Password length is not valid");
    return askUser();
  }
  var isLower=true;
  var isUpper=true;
  var isNum=true;
  var isSpecial=true;
  if(isLower===true){
    totalArray=totalArray.concat(lowerArray);
  }
  if(isUpper===true){
    totalArray=totalArray.concat(upperArray);
  }
  if(isNum===true){
    totalArray=totalArray.concat(numArray);
  }
  if(isSpecial===true){
    totalArray=totalArray.concat(specialArray);
  }
return {totalArray, passLength}
}
function generatePassword() {
  askUser()
  return "dklsfjkdlsjf"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
