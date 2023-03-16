var fechaObjetivo = new Date("Mar 21, 2023 18:00:00").getTime();
var counter = setInterval(function () {
  var fechaActual = new Date().getTime();
  var tiempoRestante = fechaObjetivo - fechaActual;
  var dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  var horas = Math.floor(
    (tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

  document.getElementById("counter").innerHTML =
    "Faltan " +
    dias +
    " dies, " +
    horas +
    " hores, " +
    minutos +
    " minuts i " +
    segundos +
    " segons per al 21 de Març.";

  if (tiempoRestante < 0) {
    clearInterval(counter);
    document.getElementById("counter").style.display = "none";
    document.getElementById("counter-image").style.display = "block";
  }
}, 1000);
