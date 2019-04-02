 /* Communication Page JavaScript */

/* Sets what the status of the service is on the webpage. */
function updateHeatmap() {
    var nbn = [Math.floor(Math.random() * 60)];
    var adsl = [Math.floor(Math.random() * 60)];
    var tv = [Math.floor(Math.random() * 60)];
    var phone = [Math.floor(Math.random() * 60)];
    var radio = [Math.floor(Math.random() * 60)];
    var foxtel = [Math.floor(Math.random() * 60)];
    
    if (nbn <= 20) {
        document.getElementById('nbn').innerHTML = "Poorly";
        document.getElementById('nbn').style.color = "red";
        
    } else if (nbn <= 40) {
        document.getElementById('nbn').innerHTML = "Okay";
        document.getElementById('nbn').style.color = "orange";
    } else if (nbn <= 60) {
        document.getElementById('nbn').innerHTML = "Great";
        document.getElementById('nbn').style.color = "green";
    }
    if (adsl <= 20) {
        document.getElementById('adsl').innerHTML = "Poorly";
        document.getElementById('adsl').style.color = "red";
    } else if (adsl <= 40) {
        document.getElementById('adsl').innerHTML = "Okay";
        document.getElementById('adsl').style.color = "orange";
    } else if (adsl <= 60) {
        document.getElementById('adsl').innerHTML = "Great";
        document.getElementById('adsl').style.color = "green";
    }
    if (tv <= 20) {
        document.getElementById('tv').innerHTML = "Poorly";
        document.getElementById('tv').style.color = "red";
    } else if (tv <= 40) {
        document.getElementById('tv').innerHTML = "Okay";
        document.getElementById('tv').style.color = "orange";
    } else if (tv <= 60) {
        document.getElementById('tv').innerHTML = "Great";
        document.getElementById('tv').style.color = "green";
    }
    if (phone <= 20) {
        document.getElementById('phone').innerHTML = "Poorly";
        document.getElementById('phone').style.color = "red";
    } else if (phone <= 40) {
        document.getElementById('phone').innerHTML = "Okay";
        document.getElementById('phone').style.color = "orange";
    } else if (phone <= 60) {
        document.getElementById('phone').innerHTML = "Great";
        document.getElementById('phone').style.color = "green";
    }
    if (radio <= 20) {
        document.getElementById('radio').innerHTML = "Poorly";
        document.getElementById('radio').style.color = "red";
    } else if (radio <= 40) {
        document.getElementById('radio').innerHTML = "Okay";
        document.getElementById('radio').style.color = "orange";
    } else if (radio <= 60) {
        document.getElementById('radio').innerHTML = "Great";
        document.getElementById('radio').style.color = "green";
    }
    if (foxtel <= 20) {
        document.getElementById('foxtel').innerHTML = "Poorly";
        document.getElementById('foxtel').style.color = "red";
    } else if (foxtel <= 40) {
        document.getElementById('foxtel').innerHTML = "Okay";
        document.getElementById('foxtel').style.color = "orange";
    } else if (foxtel <= 60) {
        document.getElementById('foxtel').innerHTML = "Great";
        document.getElementById('foxtel').style.color = "green";
    }
    setTimeout('location.reload()', 5000);
}