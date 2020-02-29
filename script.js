  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialCharacters = "!@#$%^&*_+./";
  var length = "length";

  

//   for (var i = 0; i < length; i++) {
//       var lowercase = Math.floor(Math.random () * lowercase.length);
//       password += all.substring(character, character +1);
//   }
//   return password;


function getRandomLower(){
    return String;
    lowercase[Math.floor(Math.random() * lowercase.length)]
}
console.log(getRandomLower());
// // function passwordGenerator(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters) {
// //     var passwordDisplay = " ";

// //     for(var i =0; i < length; i++){
//         passwordDisplay += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     return passwordDisplay;
// }
