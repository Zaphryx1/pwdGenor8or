// Assignment code here
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    //placeholder for the password
    var tempP = "";

    // Get the length from the user
    var pLength = parseInt(prompt("How long do you need your password to be?"));
    // Confirm if it is not a number, and if it is, return what the user has input.
    while (isNaN(pLength)) {
        pLength = parseInt(prompt("Your input is not a number is not a number. Please enter a valid number."));
    }

    if (!isNaN(parseInt(pLength))) {
        alert("Your password will be " + pLength + " charcters long.");
    }

    // confirm if certain characters are needed
    var confSpecChar = confirm("Would you like to have special characters in your password?");
    var confirmNum = confirm("Would you like to have numbers in your password?");
    var confirmLCase = confirm("Would you like to have lower case characters in your password?");
    var confirmUCase = confirm("Would you like to have upper case characters in your password?");


    while (!confSpecChar || !confirmNum || !confirmLCase || !confirmUCase) {
        // all four choices are true to include

        if (confSpecChar && confirmNum && confirmLCase && confirmUCase) {

            tempP = tempP.concat(specChar, num, lowerCase, upperCase);

            // next take out upperCase
        } else if (confSpecChar && confirmNum && confirmLCase) {

            tempP = tempP.concat(specChar, num, lowerCase);

            // next take out lowerCase
        } else if (confSpecChar && confirmNum && confirmUCase) {

            tempP = tempP.concat(specChar, num, upperCase);

            // next take out specChar
        } else if (confirmNum && confirmLCase && confirmUCase) {

            tempP = tempP.concat(num, lowerCase, upperCase);

            //take out num
        } else if (confSpecChar && confirmLCase && confirmUCase) {

            tempP = tempP.concat(specChar, lowerCase, upperCase);

            //take out two options now; remove spec and number
        } else if (confirmLCase && confirmUCase) {

            tempP = tempP.concat(lowerCase, upperCase);

            //take out all letters
        } else if (confSpecChar && confirmNum) {

            tempP = tempP.concat(specChar, num);

            //upperCase and num
        } else if (confirmNum && confirmUCase) {

            tempP = tempP.concat(num, upperCase);

            // specs and nums only
        } else if (confirmNum && confirmUCase) {

            tempP = tempP.concat(num, specChar);

            //single selections now
        } else if (confirmUCase) {

            tempP = tempP.concat(upperCase);

        } else if (confirmLCase) {

            tempP = tempP.concat(lowerCase);

        } else if (confSpecChar) {

            tempP = tempP.concat(specChar);

        } else if (confirmNum) {

            tempP = tempP.concat(num);

        } else {
            confirm("No selection was made. Please make a selection to generate password.");

            confSpecChar = confirm("Would you like to have special characters in your password?");
            confirmNum = confirm("Would you like to have numbers in your password?");
            confirmLCase = confirm("Would you like to have lower case characters in your password?");
            confirmUCase = confirm("Would you like to have upper case characters in your password?");
        }


    }






    // function to generate the password


    var password = "";

    for (var i = 0; i < pLength; i++) {

        password = password + tempP[Math.floor(Math.random() * tempP.length)];

        console.log(password);


    }

    // var password = generatePassword();

    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);