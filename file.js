var checkbox = document.getElementById("toggle_checkbox");
var textareas = document.querySelectorAll("textarea");
var iframe = document.getElementById("output");

function setGradient() {
  if (checkbox.checked) {
    document.body.style.background = "linear-gradient(to right, #0f2027, #203a43, #2c5364)";
    document.querySelector("h1").style.color = "white";
    iframe.style.backgroundColor = "black";

    for (var i = 0; i < textareas.length; i++) {
      textareas[i].style.color = "white";
      textareas[i].style.backgroundColor = "black";
    }

    var labels = document.querySelectorAll("label");
    for (var i = 0; i < labels.length; i++) {
      labels[i].style.color = "white";
    }

    if (iframe.style.backgroundColor === "black") {
      iframe.contentDocument.body.style.color = "white";
    } else {
      iframe.contentDocument.body.style.color = "black";
    }
  } else {
    document.body.style.background = "linear-gradient(to right, #ff6e7f, #bfe9ff)";
    document.querySelector("h1").style.color = "black";
    iframe.style.backgroundColor = "white";

    for (var i = 0; i < textareas.length; i++) {
      textareas[i].style.color = "black";
      textareas[i].style.backgroundColor = "white";
    }

    var labels = document.querySelectorAll("label");
    for (var i = 0; i < labels.length; i++) {
      labels[i].style.color = "black";
    }

    if (iframe.style.backgroundColor === "black") {
      iframe.contentDocument.body.style.color = "white";
    } else {
      iframe.contentDocument.body.style.color = "black";
    }
  }
}

checkbox.addEventListener("change", setGradient);
setGradient();

function run() {
  let htmlcode = document.getElementById("html-code").value;
  let csscode = document.getElementById("css-code").value;
  let jscode = document.getElementById("js-code").value;
  iframe.contentDocument.body.innerHTML = htmlcode + "<style>" + csscode + "</style>";
  iframe.contentWindow.eval(jscode);
}
