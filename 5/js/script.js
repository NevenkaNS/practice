function showMenu () {
   let nav = document.getElementById("navBar").style.display;
   if (nav === "none") {
    document.getElementById("navBar").style.display = "flex";
   }else {
    document.getElementById("navBar").style.display = "none";
   }
}

function bringBackNav(){
   if (window.innerWidth < 500) {
      document.getElementById("navBar").style.display = "none";
   }
   else {
      document.getElementById("navBar").style.display = "flex";
   }
}

