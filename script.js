

function genPassword(){
  let chars = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM!@#$%^&*()?";
  var passwordLength = 8;
  var password = "";
  for(var i = 0; i<=passwordLength; i++){
    var randomNumber = Math.floor(Math.random()*chars.length);
    password += chars.substring(randomNumber, randomNumber+1);
    document.getElementById("password").value = password;
  }
}

function copy(){
var copyText = document.getElementById("password");
copyText.select();
document.execCommand("copy");

}
