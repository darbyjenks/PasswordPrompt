// Created array's for each type
var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowerString = "abcdefghijklmnopqrstuvwxyz";
var lowerArray = lowerString.split("");
var upperString = lowerString.toUpperCase();
var upperArray = upperString.split("");
var specialArray = ["@", "!", "#"];
var totalArray = [];
var results=[];
//grabs button from html page
var generateBtn = document.querySelector("#generate");
function askUser() {
  var passLength = parseInt(window.prompt("How long do you want your password to be?"));
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Password length is not valid");
    return askUser();
  }
  var isLower=window.confirm("Would you like lower case letters?");
  var isUpper=window.confirm("Would you like upper case letters?");
  var isNum=window.confirm("Would you like numbers?");
  var isSpecial=window.confirm("Would you like to use special characters?");
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
  if (totalArray.length===0){
    window.alert("No type selected.");
    return askUser();
  }
return {totalArray, passLength}
}
function generatePassword() {
  var data = askUser();
  for (var i=0; i<data.passLength; i++){
    var index=Math.floor(Math.random()*data.totalArray.length);
    var digit=totalArray[index];
  results.push(digit);
  }
  return results.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
