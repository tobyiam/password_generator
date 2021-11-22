// Special Characters
let specialCharacters = "!@#$%^&*()";
let numbers = "1234567890";
let lowerCases = "abcdefghijklmnopqrstuvwxyz"
let UpperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
let generateButton = document.getElementById('generate')
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
    if (passwordLength <8) {
        window.alert("Your password must be at least 8 characters and no more than 128 characters.")
        return null
    }

    var numbers = window.confirm("Does your password include numbers?");

    var lowerCases = window.confirm("Does your password have any lowercase characters?");

    var upperCases = window.confirm("Does your password have any uppercase characters?");

    var special = window.confirm("Does your password have any special characters?");

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
    if (numbers === true) {
        console.log("hello");
        minimumNumbers = functionArray.getNumbers();
        minimumCount++;
    }

    if (lowerCases === true) {
        minimumLowerCases = functionArray.getLowerCases();
        minimumCount++;
    }

    if (upperCases === true) {
        minimumUpperCases = functionArray.getUpperCases();
        minimumCount++;
    }

    if (special === true) {
        minimumSpecialCharacters = functionArray.getSpecialCharacters();
        minimumCount++;
    }

    if (lowerCases === false && upperCases === false && numbers === false && special === false){
        window.alert("You must have at least one character type selected for your password")
        return null
      }

    var randomPasswordGenerated = "";

    // loop to obtain random password 
    for (let i =0; i< (parseInt(passwordLength) - minimumCount); i++){
        var randomNumberPicked = Math.floor(Math.random() * 4);

        randomPasswordGenerated += randomNumberPicked;
    }

    // random password's with our minimums to ensure characters are added 
    randomPasswordGenerated += minimumNumbers;
    randomPasswordGenerated += minimumLowerCases;
    randomPasswordGenerated += minimumUpperCases;
    randomPasswordGenerated += minimumSpecialCharacters;

    console.log(minimumNumbers);
    console.log(minimumLowerCases);
    console.log(randomPassword);
    return randomPasswordGenerated;

}
