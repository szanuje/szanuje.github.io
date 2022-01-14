var countDownDate = new Date(Date.now() + 999999999).getTime();

var x = setInterval(function () {
    var distance = countDownDate - Date.now();

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        days + ":" + hours + ":" + minutes + ":" + seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Chase ur dreams.";
    }
}, 1000);
