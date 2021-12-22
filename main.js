function send() {
  
  var x = document.getElementById("password").innerText
  
  var y = document.getElementById("confirm_password").innerText
  if (x =! y) {
    alert("passwords dont't match ")
  }
}
