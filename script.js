function getValue(event) {
  let number = event.target;
  console.log(number.value);
  document.getElementById("selected").innerHTML += "You selected " + number.value + " out of 5!"

  
}


function changeToThanks() {
  console.log("bla")
  document.getElementById("rate").style.display = "none";
  document.getElementById("thanks").style.display = "inline";
  
}
