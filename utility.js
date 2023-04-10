function myFunction() {
    var x = document.getElementById("top");
    if (x.className === "top-right") {
      x.className += " responsive";
    } else {
      x.className = "top-right";
    }
  }
  