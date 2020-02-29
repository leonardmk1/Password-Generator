var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*_+./";
var length = "length";

var includeLowercase = document.querySelector("includeLowercase");
var includeUppercase = document.querySelector("includeUppercase");
var includeNumbers = document.querySelector("IncludeNumbers");
var includeSpecialCharacters = document.querySelector(
  "includeSpecialCharacters"
);
var length = document.querySelector("legth");
var confrimEl = document.querySelector("confirm");
var resultEl = document.querySelector("result");
var passwordDisplay = document.querySelector("passwordDisplay");

// confirmEl.addEventListener("click", function(event) {
//   event.preventDefault();
//   var length = length.value;
//   var includeLowercase = includeLowercase.checked;
//   var includeUppercase = includeUppercase.checked;
//   var includeNumbers = includeNumbers.checked;
//   var includeSpecialCharacters = includeSpecialCharacters.checked;
//   var password = passwordGenerator(
//     length,
//     includeLowercase,
//     includeUppercase,
//     includeNumbers,
//     includeSpecialCharacters
//   );
//   var passwordDisplay = password;
// });

//   for (var i = 0; i < length; i++) {
//       var lowercase = Math.floor(Math.random () * lowercase.length);
//       password += all.substring(character, character +1);
//   }
//   return password;

function getRandomLower() {
  return String;
  lowercase[Math.floor(Math.random() * lowercase.length)];
}
console.log(getRandomLower());
// // function passwordGenerator(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters) {
// //     var passwordDisplay = " ";

// //     for(var i =0; i < length; i++){
//         passwordDisplay += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     return passwordDisplay;
// }
