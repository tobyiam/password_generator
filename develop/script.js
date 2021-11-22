// Special Characters
let specialCharacters = "!@#$%^&*()";
let numbers = "1234567890";
let lowerCases = "abcdefghijklmnopqrstuvwxyz";
let UpperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 

let generateButton = document.getElementById('generate');

poolofAvailableChars = ""

generateButton.addEventListener('click', writePassword)

// Password for the #password input 
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Password Criteria Prompts 
function generatePassword() {
    var passwordLength = window.prompt("What is the length of your desired password? It must be no less than 8 but no more than 120 characters.");
    if (passwordLength < 8) {
        window.alert("Your password must be at least 8 characters and no more than 128 characters.")
        return null
    }
    // for (let i = 0; i < length; i++) {
        //password += password.charAt(
           // Math.floor(Math.random() * passwordLength)
        //);
        //return password;
    //}

    var hasNumbers = window.confirm("Does your password include numbers?");

    var hasLowerCases = window.confirm("Does your password have any lowercase characters?");

    var hasUpperCases = window.confirm("Does your password have any uppercase characters?");

    var hasSpecial = window.confirm("Does your password have any special characters?");

    var minimumCount = 0; 

    var minimumNumbers = "";
    var minimumLowerCases = "";
    var minimumUpperCases = "";
    var minimumSpecialCharacters = "";


    // Function Array 
    var functionArray = {
        getNumbers: function() {
            return String.fromCharCode(Math.floor(Math.random() * 10 + 48))
        },

        getLowerCases: function() {
            return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
        },

        getUpperCases: function() {
            return String.fromCharCode(Math.floor(Math.random()* 26 + 65));
        },

        getSpecialCharacters: function() {
            return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
        }


    };

    // If user Selects OK for all. 
    if (hasNumbers === true) {
        minimumNumbers = functionArray.getNumbers();
        minimumCount++;
        poolofAvailableChars += numbers
    }

    if (hasLowerCases === true) {
        minimumLowerCases = functionArray.getLowerCases();
        minimumCount++;
        poolofAvailableChars += lowerCases
    }

    if (hasUpperCases === true) {
        minimumUpperCases = functionArray.getUpperCases();
        minimumCount++;
        poolofAvailableChars += UpperCases
    }

    if (hasSpecial === true) {
        minimumSpecialCharacters = functionArray.getSpecialCharacters();
        minimumCount++;
        poolofAvailableChars += specialCharacters
    }

    if (hasLowerCases === false && hasUpperCases === false && hasNumbers === false && hasSpecial === false){
        window.alert("You must have at least one character type selected for your password")
        return null
      }

    var randomPasswordGenerated = "";
    
    // random password's with our minimums to ensure characters are added 
    randomPasswordGenerated += minimumNumbers;
    randomPasswordGenerated += minimumLowerCases;
    randomPasswordGenerated += minimumUpperCases;
    randomPasswordGenerated += minimumSpecialCharacters;

    // loop to obtain random password 
    for (let i =0; i< (parseInt(passwordLength) - minimumCount); i++){
        var randomNumberPicked = Math.floor(Math.random() * poolofAvailableChars.length);
        randomPasswordGenerated += poolofAvailableChars[randomNumberPicked];
    }
    
    return randomPasswordGenerated;

}
