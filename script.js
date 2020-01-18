var lowercase = "abcdefghijklmnopqrstuvwxyz",
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers = "0123456789",
  punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  lowercaseInput = document.getElementById("lowercase"),
  uppercaseInput = document.getElementById("uppercase"),
  punctuationInput = document.getElementById("punctuation"),
  numbersInput = document.getElementById("numbers");
let password = "";

// generate random pwd
function generate() {
  // set pwd length/complexity
  let complexity = document.getElementById("slider").value;
  let values = "";

  if (lowercaseInput.checked) {
    values += lowercase;
  }
  if (uppercaseInput.checked) {
    values += uppercase;
  }
  if (punctuationInput.checked) {
    values += punctuation;
  }
  if (numbersInput.checked) {
    values += numbers;
  }
  //   possible pwd values
  password = "";
  for (var i = 0; i <= complexity; i++) {
    password += values.charAt(
      Math.floor(Math.random() * Math.floor(values.length - 1))
    );
  }
  if (password === "") {
    alert("Check a box, dummy!");
  }
  // add pwd to textbox
  document.getElementById("display").value = password;
}

// default length display of 25
document.getElementById("length").innerHTML = "Length: 25";

// function to set length based on slider position
document.getElementById("slider").oninput = function() {
  if (document.getElementById("slider").value > 0) {
    document.getElementById("length").innerHTML =
      "Length: " + document.getElementById("slider").value;
  } else {
    document.getElementById("length").innerHTML = "Length: 1";
  }
};

// func to copy to clipboard
function copyPwd() {
  if (password != "") {
    var copyText = document.getElementById("display").select();
    document.execCommand("copy");
    // alert copied text
    alert("Password copied to clipboard!");
  } else {
    alert("It's empty, dummy!");
  }
}
