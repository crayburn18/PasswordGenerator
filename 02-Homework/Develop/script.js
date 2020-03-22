// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword, generatePassword);

function generatePassword(){
var pwLength = prompt("Enter password length from 8-128 characters.");

while(pwLength < 8 || pwLength > 128){
  pwLength = prompt("Try again. Length must be from 8-128.");
}

var lowerCase = confirm("Do you want lowercase?");

if(lowerCase === true){
  var upperCase = confirm("Do you want uppercase?");
}
else{
  upperCase = true;
}

var numberPW = confirm("Do you want to include numbers?");

var specialChar = confirm("Do you want to include special characters?");

var pwChoices = [];
var lowerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperChoices = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numChoices = ['0','1','2','3','4','5','6','7','8','9'];
var specialChoices = ['!','@','#','$','%','^','&','*','(',')'];

if(lowerCase === true){
  for(i=0; i<lowerChoices.length; i++){
    pwChoices.push(lowerChoices[i]);
  }
};

if(upperCase === true){
  for(i=0; i<upperChoices.length; i++){
    pwChoices.push(upperChoices[i]);
  }
};

if(numberPW === true){
  for(i=0; i<numChoices.length; i++){
    pwChoices.push(numChoices[i]);
  }
};

if(specialChar === true){
  for(i=0; i<specialChoices.length; i++){
    pwChoices.push(specialChoices[i]);
  }
};

var password = "";

for(i=0; i<pwLength; i++){
  password = password + pwChoices[Math.floor(Math.random() * pwChoices.length)];

 
};
 return password;
}

