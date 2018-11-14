"use-strict";

const theForm = document.getElementById("the-form");
const theDate = document.getElementById("date");
const getDate = document.querySelector('input[type="date"]');
const colour = document.getElementById("color");
const value = document.getElementById("the-value");
const Range = document.getElementById("range");
const menuToggle = document.getElementById("menu-toggle");
const menuNav = document.getElementById("menu-nav");

const toggleMenu = () => {
  console.log("called toggleMenu")
  menuNav.classList.toggle("menu-toggle");
}
menuToggle.addEventListener("click", toggleMenu);

var d = document.getElementById("date").innerText;
/*store h1 innertext */

var originaltext = document.getElementById("date").innerText;

function showDate(){
  /*new date value is stored in d */
  let d = new Date(getDate.value);
  /*alert((d.getDate()) + '/' + d.getMonth() + '/' +  d.getFullYear());*/
  d.toDateString(); /*make date human readable */

/* add original text and date and display them*/
  a = (`${originaltext}` + " " + `${d}`);
   document.getElementById("date").innerText = a;
   console.log(a);
}
getDate.addEventListener("change", showDate);

function setColor(){
var aa =  value.style.backgroundColor = colour.value;
  console.log(aa);
  alert(aa);
}
theForm.addEventListener("input", setColor);

/*function rangeAction{
}
Range.addEventListener("input", rangeAction);*/
