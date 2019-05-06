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
    var colour, status;
    if (internetService < 0.2) {
        status = "Down";
        colour = "Red";
    } else {
        status = "Ok";
        colour = "Black";
    }
    document.getElementById("internet").innerHTML = status;
    document.getElementById('internet').style.color = colour;
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