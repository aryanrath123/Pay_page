let tColorA = document.getElementById("tcolorA"),
  tColorB = document.getElementById("tcolorB"),
  tColorC = document.getElementById("tcolorC"),
  iconA = document.querySelector(".fa-credit-card"),
  iconB = document.querySelector(".fa-building-columns"),
  iconC = document.querySelector(".fa-wallet"),
  cDetails = document.querySelector(".card-details .c-details");

function doFun() {
  tColorA.style.color = "#008080"; // Teal color
  tColorB.style.color = "#444"; // Default color
  tColorC.style.color = "#444"; // Default color
  iconA.style.color = "#008080"; // Teal color
  iconB.style.color = "#aaa"; // Default color
  iconC.style.color = "#aaa"; // Default color
  cDetails.style.display = "block";
}

function doFunA() {
  tColorA.style.color = "#444"; // Default color
  tColorB.style.color = "#008080"; // Teal color
  tColorC.style.color = "#444"; // Default color
  iconA.style.color = "#aaa"; // Default color
  iconB.style.color = "#008080"; // Teal color
  iconC.style.color = "#aaa"; // Default color
  cDetails.style.display = "none";
}

function doFunB() {
  tColorA.style.color = "#444"; // Default color
  tColorB.style.color = "#444"; // Default color
  tColorC.style.color = "#008080"; // Teal color
  iconA.style.color = "#aaa"; // Default color
  iconB.style.color = "#aaa"; // Default color
  iconC.style.color = "#008080"; // Teal color
  cDetails.style.display = "none";
}
