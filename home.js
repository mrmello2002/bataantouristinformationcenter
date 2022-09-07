function myFunction1() {
  document.getElementById("p1").style.fontFamily = "Garamond";
  document.getElementById("p2").style.fontFamily = "Garamond";
  document.getElementById("p3").style.fontFamily = "Palatino Linotype";
}

function myFunction2() {
  document.getElementById("p1").style.fontFamily = "Georgia";
  document.getElementById("p2").style.fontFamily = "Georgia";
  document.getElementById("p3").style.fontFamily = "Georgia";
}

function myFunction3() {
  document.getElementById("p1").style.fontFamily = "Arial";
  document.getElementById("p2").style.fontFamily = "Arial";
  document.getElementById("p3").style.fontFamily = "Arial";
}

function myFunction4() {
  document.getElementById("p1").style.fontSize = "Small";
  document.getElementById("p2").style.fontSize = "Small";
  document.getElementById("p3").style.fontSize = "Small";
}

function myFunction5() {
  document.getElementById("p1").style.fontSize = "14px";
  document.getElementById("p2").style.fontSize = "14px";
  document.getElementById("p3").style.fontSize = "14px";
}

function myFunction6() {
  document.getElementById("p1").style.fontSize = "Medium";
  document.getElementById("p2").style.fontSize = "Medium";
  document.getElementById("p3").style.fontSize = "Medium";
}

function myFunction7() {
  document.getElementById("p1").style.color = "#000";
  document.getElementById("p2").style.color = "#000";
  document.getElementById("p3").style.color = "#000";
}

function myFunction8() {
  document.getElementById("p1").style.color = "#ff0000";
  document.getElementById("p2").style.color = "#ff0000";
  document.getElementById("p3").style.color = "#ff0000";
}

function myFunction9() {
  document.getElementById("p1").style.color = "#777";
  document.getElementById("p2").style.color = "#777";
  document.getElementById("p3").style.color = "#777";
}

function myFunction10() {
  document.getElementById("p1").style.fontWeight = "300";
  document.getElementById("p2").style.fontWeight = "300";
  document.getElementById("p3").style.fontWeight = "300";
}

function myFunction11() {
  document.getElementById("p1").style.fontWeight = "Bold";
  document.getElementById("p2").style.fontWeight = "Bold";
  document.getElementById("p3").style.fontWeight = "Bold";
}

function myFunction12() {
  document.getElementById("p1").style.fontWeight = "600";
  document.getElementById("p2").style.fontWeight = "600";
  document.getElementById("p3").style.fontWeight = "600";
}

function addHandler() {
    var addH1 = document.getElementById('div1');
    var addH2 = document.getElementById('div2');
    var addH3 = document.getElementById('div3');
    if (addH1.addEventListener && addH2.addEventListener && addH3.addEventListener) {
    addH1.addEventListener('click', addBord, false);
    addH2.addEventListener('click', addBord, false);
    addH3.addEventListener('click', addBord, false);
}
    else if (addH1.attachEvent && addH2.attachEvent && addH3.attachEvent) {
    addH1.attachEvent('onclick', addBord);
    addH2.attachEvent('onclick', addBord);
    addH3.attachEvent('onclick', addBord);
    }
}



function addBord () {
    var add1 = document.getElementById('div1');
    var add2 = document.getElementById('div2');
    var add3 = document.getElementById('div3');
    add1.style.backgroundColor = '#ffff99';
    add2.style.backgroundColor = '#ffff99';
    add3.style.backgroundColor = '#ffff99';
}
