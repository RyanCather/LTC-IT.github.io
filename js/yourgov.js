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
        text = "<div class=\"pagelayout\"> <p>Missile Launched! </p><p><img class=\"img-fluid\" src=\"../images/missile.gif\"></p></div>";
    } else {
        text = "Incorrect Pin <p><img class=\"img-fluid\" src=\"../images/no.png\"></p>";
    }
    document.getElementById("feedback").innerHTML = text;
}


function heatmap() {
    var internetService = Math.random(); // Generates a number between 0..1 (but not 1).
    var telephoneService = Math.random();
    var telephoneStatus, internetStatus;
    if (internetService < 0.2) {
        internetStatus = "<div class=\"dot  red  dot--full\"></div>"
    } else if (internetService < 0.6) {
        internetStatus = "<div class=\"dot  yellow  dot--full\"></div>"
    } else {
        internetStatus = "<div class=\"dot  green  dot--full\"></div>"
    }

    if (telephoneService < 0.2) {
        telephoneStatus = "<div class=\"dot  red  dot--full\"></div>"
    } else if (telephoneService < 0.6) {
        telephoneStatus = "<div class=\"dot  yellow  dot--full\"></div>"
    } else {
         telephoneStatus = "<div class=\"dot  green  dot--full\"></div>"
    }

    document.getElementById("telephone").innerHTML = telephoneStatus;
    document.getElementById("internet").innerHTML = internetStatus;

    setTimeout('location.reload()', 5000);
}

function vote() {


    document.querySelector('input[name="candidate"]:checked').value;


/*
    var radios = document.getElementsByName('candidates');

    for (var i = 0, length = radios.length; i < length; i++)
    {
        if (radios[i].checked)
        {
            // do whatever you want with the checked radio
            alert(radios[i].value);

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
    */
}