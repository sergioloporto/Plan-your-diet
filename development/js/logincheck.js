document.addEventListener('DOMContentLoaded', function () {

    const navbarNameField = document.getElementById('nameInHeader');

    //Check if the user is logged in
    function loginGlobal() {
        if (localStorage.getItem("savedName") === null) {
            //If the user is not logged in the Welcome screen appears.
            window.location.href = "./app.html";

        } else {
            navbarNameField.innerText = localStorage.savedName;
        }
    }

    loginGlobal();
});