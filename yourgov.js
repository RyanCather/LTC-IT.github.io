function showDate() {
    document.getElementById("demo").innerHTML = Date();
}

function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "images/pic_bulboff.gif";
    } else {
        image.src = "images/pic_bulbon.gif";
    }
}

function checkPin() {
    var x, text;
    //Get the value of input field with id="numb"
    x = document.getElementById("pin").value;
    // If x is Not a Number or less than one or greater than 10
    if (x == "1234") {
        text = "Missile Launched! <p><img class=\"img-fluid\" src=\"images/missile.gif\"></p>";
    } else {
        text = "Incorrect Pin <p><img class=\"img-fluid\" src=\"images/no.png\"></p>";
    }
    document.getElementById("feedback").innerHTML = text;
}