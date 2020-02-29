var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*_+./";

function generatePassword() {
  var lengthDropdown = document.getElementById("length") ;
  var length = parseInt(lengthDropdown.options[lengthDropdown.selectedIndex].text);

  var allCharacters = "";
  if (document.getElementById("lower").checked === true){
    allCharacters = allCharacters + lowercase;
  }
  if (document.getElementById("upper").checked === true){
    allCharacters = allCharacters + uppercase;
  }
  if (document.getElementById("num").checked === true){
    allCharacters = allCharacters + numbers;
  }
  if (document.getElementById("special").checked === true){
    allCharacters = allCharacters + specialCharacters;
  }
  
console.log(allCharacters);




}