// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
function generatePassword() {

  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var passwordLength = window.prompt(
    "Select number of characters to include in your new password (between 8 and 128 characters)")

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert(
      "I'm sorry your chosen length does not meet the required value. Please try again!"
    )
    return
  }
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var includeLowercase = window.confirm(
    "Would you like to include lowercase characters (i.e. a,b,c, etc.) in your new password?"
  )
  var includeUppercase = window.confirm(
    "Would you like to include uppercase characters (i.e. A,B,C, etc.) in your new password?"
  )
  var includeNumeric = window.confirm(
    "Would you like to include numbers (i.e. 0,1,2,3, etc.) in your new password?"
  )
  var includeSpecialCharacters = window.confirm(
    "Would you like to include special characters (i.e. !,@,$,%,&,*) in your new password?"
  )


  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  if (includeLowercase == false && includeUppercase == false && includeNumeric == false && includeSpecialCharacters == false) {
    window.alert(
      "I'm sorry, you have to include at least one of the acceptance criteria! Please try again.")
    return
  }


  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
  var numbers = "0123456789";
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var finalCharacterChoices = "";
  var finalPassword = "";

  if (includeLowercase == true) { finalCharacterChoices += lowerCase };
  if (includeUppercase == true) { finalCharacterChoices += upperCase };
  if (includeNumeric == true) { finalCharacterChoices += numbers };
  if (includeSpecialCharacters == true) { finalCharacterChoices += specialCharacters };

  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  for (var index = 0; index < passwordLength; index++) {
    var pass = Math.floor(Math.random() * finalCharacterChoices.length)
    finalPassword = finalPassword + finalCharacterChoices[pass]
  }

  return finalPassword;

}
