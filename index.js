var fechaObjetivo = new Date("Jul 6, 2023 08:45:00").getTime();
var counter = setInterval(function () {
  var fechaActual = new Date().getTime();
  var tiempoRestante = fechaObjetivo - fechaActual;
  var dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  var horas = Math.floor(
    (tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

  document.getElementById("counter-days").innerHTML = dias + "<br/>Dies";
  document.getElementById("counter-hores").innerHTML = horas + "<br/>Hores";
  document.getElementById("counter-mins").innerHTML = minutos + "<br/>Minuts";
  document.getElementById("counter-secs").innerHTML = segundos + "<br/>Segons";
}, 1000);

function startTime() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  //Add a zero in front of numbers<10
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("clock").innerHTML = hr + " -- " + min + " -- " + sec;
  var time = setTimeout(function () {
    startTime();
  }, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
