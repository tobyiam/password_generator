// Assignment code here
let generateBtnEl = document.getElementById('generate');

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

let totalPassword = "";
let inputLowercase = true;
let inputNumeric = true;


let special = "!@#$%^&*"
let numeric = "1234567890"
let lowercase = "abc";
let uppercase = "ABC";

if(inputLowercase){
  totalPassword += lowercase;
}

if(inputNumeric){
  totalPassword += numeric;
}

for(let i = 0; i <  length; i++){
  
}

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = window.prompt("What is the length of your password?");
    if (passwordLength < 8){
      window.alert("Your password must be at least 8 characters and no more than 128 characters.")
      return null
    }
    if (passwordLength > 128){
      window.alert("Your password must be at least 8 characters and no more than 128 characters.")
      return null
    }
  var passwordLowercase = window.confirm("Does your password include lowercase characters? Click Ok for yes or Click Cancel for no");
  var passwordUppercase = window.confirm("Does your password include uppercase characters? Click Ok for yes or Click Cancel for no");
  var passwordNumeric = window.confirm("Does your password include numeric characters? Click Ok for yes or Click Cancel for no" );
  var passwordSpecial = window.confirm("Does your password include special characters? Click Ok for yes or Click Cancel for no");
    if (passwordLowercase === false && passwordUppercase === false && passwordNumeric === false && passwordSpecial === false){
      window.alert("You must have at least one character type selected for your password")
      return null
    }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtnEl.addEventListener("click", writePassword) 
