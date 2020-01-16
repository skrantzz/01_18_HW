// generate random pwd
function generate() {
  // set pwd length/complexity
  let complexity = document.getElementById("slider").value;
  //   possible pwd values
  let values = "abcdefhijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";

  let password = "";
  for (var i = 0; i <= complexity; i++) {
    password =
      password +
      values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
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
  var copyText = document.getElementById("display").select();

  document.execCommand("copy");
  // alert copied text
  alert("Password copied to clipboard!");
}
