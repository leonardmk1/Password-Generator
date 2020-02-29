var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*_+./";
var length = "length";

var includeLowercase = document.getElementById("includeLowercase");
var includeUppercase = document.getElementById("includeUppercase");
var includeNumbers = document.getElementById("IncludeNumbers");
var includeSpecialCharacters = document.getElementById("includeSpecialCharacters");
var length = document.getElementById("legth");
var resultEl = document.getElementById("result")
var passwordDisplay = document.getElementById("passwordDisplay")

genetratePassword.addEventListener("confirm", function(event) {
    event.preventDefault()
    var length = length.value
    var includeLowercase = includeLowercase.checked
    var includeUppercase = includeUppercase.checked
    var includeNumbers = includeNumbers.checked
    var includeSpecialCharacters= includeSpecialCharacters.checked
    var password = passwordGenerator(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters)
    var passwordDisplay = password
})

function passwordGenerator(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters) {
    var passwordDisplay = " ";

    for(var i =0; i < length; i++){
        passwordDisplay += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return passwordDisplay;
}