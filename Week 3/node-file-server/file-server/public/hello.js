var blinkHello = document.getElementById("blink-hello");
window.setInterval(function(){
  blinkHello.classList.toggle('orange');
}, 1000);