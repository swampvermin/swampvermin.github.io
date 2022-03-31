button.onclick = myFunction;


  function myFunction() {
document.getElementsByTagName("BODY")[0].style.backgroundColor = "red";
    var x = document.getElementById("fire")
if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}


