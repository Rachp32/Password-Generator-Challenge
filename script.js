  // Assignment Code
 var generateBtn = document.querySelector("#generate");
 var passwordText = document.querySelector("#password");
 console.log(generateBtn);

// Array of special characters to be included in password
 var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
 var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
 var lowercaseCharacters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
 var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 

// Prompt user for password options
 alert = confirm ("Please confirm atleast one of the following questions")
 var lowerCase = confirm ("Do you want to include lower case?")
 var upperCase = confirm("Do you want to include upper case?");
 var Numeric = confirm("Do you want to include numbers?");
 var Special = confirm("Do you want to include special characters?");

passwordLength = prompt("Enter required password length (8-128)");
if (passwordLength < 8 || passwordLength > 128) {
   prompt("Incorrect length chosen")
    }
    
console.log(passwordLength);  //Checking password length functions correctly 

while(lowerCase === false && upperCase === false && Special === false && Numeric === false) {
  alert("You must choose at least one parameter"); 
} 

// Passing the character selections into one array
 var passwordCharacters = []

 if (Special) {
 passwordCharacters = passwordCharacters.concat(specialCharacters)
 }

 if (Numeric) {
 passwordCharacters = passwordCharacters.concat(numericCharacters)
 }

 if (lowerCase) {
 passwordCharacters = passwordCharacters.concat(lowercaseCharacters)
 }

 if (upperCase) {
 passwordCharacters = passwordCharacters.concat(uppercaseCharacters)
 }

 console.log(passwordCharacters)
    
// Function to generate password with user input
// for loop to iterate through the concatenated array
 let password = ""
 function generatePassword() { 
 for (let i = 0; i <passwordLength; i++) {
  password += passwordCharacters[Math.floor(Math.random() * (passwordCharacters.length))];
}};

console.log(password);

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)