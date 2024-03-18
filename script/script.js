
var dt = new Date();
var vreme = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
document.getElementById("date-time").innerHTML = vreme;


function obavesti() {
  var ime = document.getElementById("ime");
  var mejl = document.getElementById("mejl");
  if (ime.value === "") {
    alert("Unesi ime!");
    return;
  }
  if (mejl.value === "") {
    alert("Unesi mejl!");
    return;
  }
  if (!validateEmail(mejl)) {
    alert("Unesi mejl u ispravnom formatu!");
    return;
  }
  var pozicija = document.getElementById("pozicija");
  alert(
    "Unete vrednosti su: " + ime.value + "," + mejl.value + "," + pozicija.value
  );
}
function validateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}


function burgercina() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
