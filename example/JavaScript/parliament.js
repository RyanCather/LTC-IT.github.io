/* Parliament House JavaScript */

/* Checks if the candiadate values equal 10. If so it 'sumbits' the form to the AEC. */
function validateElectionForm() {
    var candidate1 = document.getElementById('candidate1').value;
    var candidate2 = document.getElementById('candidate2').value;
    var candidate3 = document.getElementById('candidate3').value;
    var candidate4 = document.getElementById('candidate4').value;
    var candidates = Number(candidate1) + Number(candidate2) + Number(candidate3) + Number(candidate4);

    if (candidates == 10){
        document.getElementById('candidateSuccess').style.display = "block";
        document.getElementById('candidateSuccess').innerHTML = "Thank you for voting! Your form has been submitted to the AEC! This page will refresh in 5 seconds.";
        document.getElementById('candidateError').style.display = "none";
        document.getElementById('candidateError').innerHTML = "";
        setTimeout('location.reload()',5000)
    } else {
        document.getElementById('candidateSuccess').style.display = "none";
        document.getElementById('candidateSuccess').innerHTML = "";
        document.getElementById('candidateError').style.display = "block";
        document.getElementById('candidateError').innerHTML = "You have not completed the form correctly! See the How to Vote section for more details."
    }
}