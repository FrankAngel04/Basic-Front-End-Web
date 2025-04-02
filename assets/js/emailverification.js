function verifyEmail() {
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmEmail").value;

    if (email !== confirmEmail) {
        document.getElementById("confirmEmail").style.borderColor = "red";
    } 
    else {
        document.getElementById("confirmEmail").style.borderColor = "green";
    }
}
