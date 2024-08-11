// Definir a data de término
var countDownDate = new Date("Jan 30, 2025 20:00:00 GMT-0300").getTime();

// Atualizar a contagem regressiva a cada 1 segundo
var countdownFunction = setInterval(function() {

    // Pegar a data e hora atual
    var now = new Date().getTime();

    // Calcular a diferença entre agora e a data de término
    var distance = countDownDate - now;

    // Calcular tempo em dias, horas, minutos e segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibir o resultado no elemento com id="time"
    document.getElementById("time").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // Se a contagem terminar, exibir uma mensagem
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("time").innerHTML = "O tempo acabou!";
    }
}, 1000);


// Controle de música
var player = document.getElementById("youtube-audio");
var playPauseButton = document.getElementById("play-pause");

playPauseButton.addEventListener("click", function() {
    if (player.src.includes("autoplay=1")) {
        player.src = player.src.replace("autoplay=1", "autoplay=0");
        playPauseButton.textContent = "▶️";
    } else {
        player.src = player.src.replace("autoplay=0", "autoplay=1");
        playPauseButton.textContent = "⏸";
    }
});