function Click(){
  document.getElementById("h").innerHTML = "HOLA MUNDO";
}

function Esconder(){
  document.getElementById("h").style.display = "none";
}

function Mostrar(){
  document.getElementById("h").style.display = "block";
}

function Alert(){
  window.alert("HOLA MUNDO");
}

function Log(){
  console.log("HOLA MUNDO");
}

function Calcular(){
  document.getElementById("suma").innerHTML = "SUMA: " + 3+5;
  document.getElementById("resta").innerHTML = "RESTA: " + (3-5);
  document.getElementById("multi").innerHTML = "MULTIPLICACIO: " + 3*5;
  document.getElementById("divi").innerHTML = "DIVISIO: " + 3/5;
}
