// Assignment code here
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var pLength = "";
var needSpec;
var needNum;
var needUpper;
var needLower;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    // Get the length from the user
    var pLength = parseInt(prompt("How long do you need your password to be?"));
    // Confirm if it is not a number, and if it is, return what the user has input.
    while (isNaN(pLength)) {
        pLength = parseInt(prompt("Your input is not a number is not a number. Please enter a valid number."));
    }

    if (!isNaN(parseInt(pLength))) {
        alert("Your password will be " + pLength + " charcters long.");
    }



    // var password = generatePassword();

    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);