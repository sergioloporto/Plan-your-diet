document.addEventListener('DOMContentLoaded', function () {

    const sendNameBtn = document.getElementById('send-name-button');
    const navbarNameField = document.getElementById('nameInHeader');
    const appDashboard = document.querySelector('.app-welcome-dashboard');
    const appWelcome = document.querySelector('.app-welcome');

    //Check if the user is logged in
    function checkIfLoggedin() {
        if (localStorage.getItem("savedName") != null) {
            if (appDashboard.classList.contains('app-welcome-dashboard_whitebg')) {
                appDashboard.classList.remove('app-welcome-dashboard_whitebg');
                appWelcome.parentNode.removeChild(appWelcome);
                navbarNameField.innerText = localStorage.savedName;
            }
        }
    }
    //Always execute the function to check if the user is logged in.
    checkIfLoggedin();

    //If the user is not logged in the Welcome screen appears.
    sendNameBtn.addEventListener('click', function (e) {
        e.preventDefault();
        yourName = document.getElementById('name').value;
        localStorage.setItem('savedName', yourName);

        navbarNameField.innerText = localStorage.savedName;
        checkIfLoggedin();
    });
});