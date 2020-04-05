var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*_+./";

function generatePassword() {
  var lengthDropdown = document.getElementById("length") ;
  var length = parseInt(lengthDropdown.options[lengthDropdown.selectedIndex].text);

  var allCharacters = "";
  if (document.getElementById("lower").checked){
    allCharacters = allCharacters + lowercase;
  }
  if (document.getElementById("upper").checked){
    allCharacters = allCharacters + uppercase;
  }
  if (document.getElementById("num").checked){
    allCharacters = allCharacters + numbers;
  }
  if (document.getElementById("special").checked){
    allCharacters = allCharacters + specialCharacters;
  }
  var passwordCharacters = "";
  for(var i = 0; i < length; i++) {
    passwordCharacters = passwordCharacters + allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
document.getElementById("passwordDisplay").textContent = passwordCharacters;

$('input:checkbox').prop('checked', true);
$("#length").val("8");

$('#exampleModal').modal('toggle');
}