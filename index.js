var fechaObjetivo = new Date("May 17, 2023 09:00:00").getTime();
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
