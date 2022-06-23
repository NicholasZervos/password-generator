var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var symbols = ['@', '$', '*', '!', '%', '&', '#', '?', '>', '.', '=', '+', '(', '-', ')', '<', '/', '\\', ';', '[', ']', ':', '{', '}', '|', '"', "'", '_'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// Assignment code here
function pwOptions() {
    // prompt user for length of password between 8-128 characters
    var pwLength = parseInt(prompt("How many characters would you like the password to be? between 8-128 characters"));
    if(Number.isNaN(pwLength)) {
        alert("Please enter only numbers");
        return null;
    }
    if(pwLength < 8 || pwLength > 128) {
        alert("Please enter a numer 8-128");
        return null;
    }
    // let user choose lowercase, uppercase, numeric, and/or special characters
    var hasUpper = confirm("Would you like your password to include uppercase?");
    var hasLower = confirm("Would you like your password to include lowercase?");
    var hasNumeric = confirm("Would you like your password to include numbers?");
    var hasSymbols = confirm("Would you like your password to include special characters?");
    // checking to makesure the user selected at least one
    if(
        hasUpper === false &&
        hasLower === false &&
        hasNumeric === false &&
        hasSymbols === false 
    )
    {
        alert("Select at least one character type");
        return null;
    }
    // assigning the variables as properties for users choice
    var usersChoice = {
        pwLength: pwLength, 
        hasUpper: hasUpper,
        hasLower: hasLower,
        hasNumeric: hasNumeric,
        hasSymbols: hasSymbols,
    }
    return usersChoice;
}
// use math.random to get random array index
function randomNum(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    var pwRandom = arr[randomIndex];
    return pwRandom; 
}
function generatePassword() {
    // variable to hold user choices
    // variable to hold results in empty array
    // variable to hold possible characters in empty array
    // variable to hold confirmed characters in an empty array
    // several if statements to checked whether you chose each type of character
    // inside of those if statements we're going to concat each type of character that we chose to the possible characters array
    // in each if statement after we've checked the possible characters then we're going to push a random number of those characters into the confirmed characters array
    // need to do an intger function inside of a for loop, for the password length based on options also has to with Math.random
    // do the above for both possible characters and confirmed characters
    /* at the end going to have to return all the results using 
    .join */
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