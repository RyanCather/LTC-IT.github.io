/* Enviroment & Energy JavaScript */

var second_enabled = false;

/* Updates the power gird with various values. */
function powerUsage(enabled) {
    var gridUsage1 = [Math.floor(Math.random() * 100)];
    var gridUsage2 = [Math.floor(Math.random() * 100)];
    document.getElementById('power1Status').innerHTML = "Enabled";
    document.getElementById('power1Status').style.color = "green";
    document.getElementById('power1Percentage').innerHTML = gridUsage1;
    if (gridUsage1 <= 50) {
        document.getElementById('power1Reccomendation').innerHTML = "Low";
        document.getElementById('power1Load').innerHTML = "Low";
        document.getElementById('power1Load').style.color = "green";
        document.getElementById('power1Load').style.fontWeight = "normal";
    } else if (gridUsage1 > 50 && gridUsage1 <= 80) {
        document.getElementById('power1Reccomendation').innerHTML = "Medium";
        document.getElementById('power1Load').innerHTML = "Medium";
        document.getElementById('power1Load').style.color = "orange";
        document.getElementById('power1Load').style.fontWeight = "normal";
    } else if (gridUsage1 > 80) {
        document.getElementById('power1Reccomendation').innerHTML = "High";
        document.getElementById('power1Reccomendation').style.color = "red";
        document.getElementById('power1Reccomendation').style.fontWeight = "bold";
        document.getElementById('power1Load').innerHTML = "High";
        document.getElementById('power1Load').style.color = "red";
        document.getElementById('power1Load').style.fontWeight = "bold";
    }

    if (enabled) {
        document.getElementById('power2Status').innerHTML = "Enabled";
        document.getElementById('power2Percentage').innerHTML = gridUsage2;
        document.getElementById('power2Status').style.color = "green";

        if (gridUsage2 <= 50) {
            document.getElementById('power2Load').style.fontWeight = "normal";
            document.getElementById('power2Load').style.color = "green";
            document.getElementById('power2Load').innerHTML = "Low";
        } else if (gridUsage2 > 50 && gridUsage2 <= 80) {
            document.getElementById('power2Load').style.fontWeight = "normal";
            document.getElementById('power2Load').style.color = "orange";
            document.getElementById('power2Load').innerHTML = "Medium";
        } else if (gridUsage2 > 80) {
            document.getElementById('power2Load').innerHTML = "High";
            document.getElementById('power2Load').style.color = "red";
            document.getElementById('power2Load').style.fontWeight = "bold";
        }
    }
    else {
        document.getElementById('power2Status').innerHTML = "Disabled";
        document.getElementById('power2Percentage').innerHTML = "0";
        document.getElementById('power2Load').innerHTML = "N/A";

    }
}

/* Checks if the username and password match. If so, hides the login form and shows the powergrid button. */
function login() {
    if (document.getElementById('username').value === "admin" && document.getElementById('password').value === "Password1") {
        document.getElementById('login').style.visibility = "hidden";
        document.getElementById('login1').style.visibility = "hidden";
        document.getElementById('toggle').style.visibility = "visible";
    } else {
        document.getElementById('error').style.display = "block";
        document.getElementById('error').innerHTML = "Incorrect Username or Password.";
    }
}

 /* Toggle between the second grid being on or off */
function toggleGrid2() {
        if (second_enabled === false){
            second_enabled = true;
            document.getElementById('powerButton').innerHTML = "Disble Grid 2";
            document.getElementById('powerButton').classList.remove("btn-success");
            document.getElementById('powerButton').classList.add("btn-danger");
        } else if (second_enabled === true) {
            second_enabled = false;
            document.getElementById('powerButton').innerHTML = "Enable Grid 2";
            document.getElementById('powerButton').classList.remove("btn-danger");
            document.getElementById('powerButton').classList.add("btn-success");
            document.getElementById('power2Status').style.color = "red";
            document.getElementById('power2Percentage').style.color = "black";
            document.getElementById('power2Load').style.color = "black";
        }
    }

window.setInterval(function () {
    powerUsage(second_enabled);
}, 5000);

document.getElementById('script').addEventListener('load', function() {
    powerUsage(second_enabled);
}, false);