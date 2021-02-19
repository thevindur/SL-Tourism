function customerDetails() {
  var firstname = prompt("Please enter your  first Name", "");
  var Lastname = prompt("Please enter your  Last Name", "");
  var email = prompt("Please enter your  email", "");
  if (firstname != null) {
    document.getElementById("f1").innerHTML = firstname;
  }
    if (Lastname != null) {
    document.getElementById("f2").innerHTML = Lastname;
  }
    if (email != null) {
    document.getElementById("f3").innerHTML = email;
  }
}
