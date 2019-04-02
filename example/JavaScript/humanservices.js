/* Human Services JavaScript */

/* Arrays that contain the data that can be displayed on the Human Services page. */
var personFirstName = ["Anwar","Ryan","Sam","Katlin","Jenny","Shelly"];
var personLastName = ["Hamill", "Cather", "Smith", "Alright", "Lovekin", "Gooday"] ;
var personEmail = ["8350893@schoolsnet.act.edu.au", "ryan.cather@ed.act.edu.au", "sam@sam.com", "katlin0654@gmail.com", "jenny.lovekin@hotmail.com", "shelly@shellyphotography.com.au"];
var personDOB = ["2000-05-02", "1960-01-02","2002-06-18","1995-12-12", "1926-11-29", "2000-08-20"];
var personAddress = ["15 Hawker St Torrens ACT 2607", "123 Dreamwork Av Lakeview NSW 2456", "P.O. Box 54 Tuggeranong ACT 2901", "456 Chillway Dr Hethrow QLD 3654", "2 Sunny Lane VIC 4141", "888 Scary Close WA 9856"];
var personMale = ["true", "true", "true", "false", "false", "false"];
var personFemale = ["false", "false", "false", "true", "true", "true"];
var personOther = ["false", "false", "false", "false", "false", "false"];
var personUsername = ["HAMILA", "CATHER", "SMITHS", "ALRIGHK", "LOVEKIJ", "GOODAS"];
var personPassword = ["Password1", "Genericpassword", "123456", "ILoveApples23", "Password321", "ILoveMum321"];
var personHomePhoneNumber = ["(02) 6286 9127", "(02) 6289 1245", "(02) 6245 4545", "(02) 62453636", "(02) 6289 1245", "(02) 4444 4444"];
var personMobileNumber = ["0405 694 565", "0405 412 569", "0489 569 124", "0489 898 989", "0412 345 678", "0404 045 656"];
var personMedicareNumber = ["156923567569", "345369124598", "212554789356", "145361953792", "146389246815", "291643667134"];
var personPrivateHealthNumber = ["5684255689", "2348562145", "4536635289", "1234567895", "4523981256", "4536872951"];
var personGPName = ["John Smith", "Penny Lovekin", "Alex Happyman", "Bill Mates", "Hellen Greenwood", "Harvey Peter"];
var rand = [Math.floor(Math.random() * (6 - 0))];

/* Generates the random user data which is seen on the Human Services page. */
function items() {
    document.getElementById('personFirstName').value = personFirstName[rand];
    document.getElementById('personLastName').value = personLastName[rand];
    document.getElementById('personEmail').value = personEmail[rand];
    document.getElementById('personDOB').value = personDOB[rand];
    document.getElementById('personAddress').value = personAddress[rand];
    document.getElementById('personUsername').value = personUsername[rand];
    document.getElementById('personPassword').value = personPassword[rand];
    document.getElementById('personHomePhoneNumber').value = personHomePhoneNumber[rand];
    document.getElementById('personMobileNumber').value = personMobileNumber[rand];
    document.getElementById('personMedicareNumber').value = personMedicareNumber[rand];
    document.getElementById('personPrivateHealthNumber').value = personPrivateHealthNumber[rand];
    document.getElementById('personGPName').value = personGPName[rand];
    if (personMale[rand] == 'true') {
        document.getElementById('personMale').checked = personMale[rand];
    }
    if (personFemale[rand] == 'true') {
         document.getElementById('personFemale').checked = personFemale[rand];
    }
    if (personOther[rand] == 'true'){
        document.getElementById('personOther').checked = personOther[rand];
    }
}

/* Tells the user they have updated their details and refreshes page after 5 seconds. */
function userDetailsSubmit() {
    setTimeout('location.reload()',5000);
    document.getElementById('updateSuccess').style.display = "block";
    document.getElementById('updateSuccess').innerHTML = "Your details have been updated! This page will refresh in 5 seconds.";
}