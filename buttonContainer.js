const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");

btn5.addEventListener("click", clockwise);

var val1, val2, val3, val4, val6, val7, val8, val9;

function clockwise() {
  val1 = btn4.innerText;
  val2 = btn1.innerText;
  val3 = btn2.innerText;
  val4 = btn7.innerText;
  val6 = btn3.innerText;
  val7 = btn8.innerText;
  val8 = btn9.innerText;
  val9 = btn6.innerText;

  btn1.innerHTML = val1;
  btn2.innerHTML = val2;
  btn3.innerHTML = val3;
  btn4.innerHTML = val4;
  btn6.innerHTML = val6;
  btn7.innerHTML = val7;
  btn8.innerHTML = val8;
  btn9.innerHTML = val9;
}
