document.addEventListener('DOMContentLoaded', function () {


    const sendNameBtn = document.getElementById('send-name-button');
    const navbarNameField = document.getElementById('nameInHeader');
    const appDashboard = document.querySelector('.app-welcome-dashboard');
    const appWelcome = document.querySelector('.app-welcome');
    const loggedInDashboard = document.querySelector('.app-dashboard-logged-in');

    //Always start without dashboard
    loggedInDashboard.style.display = "none";
    appWelcome.style.display = "none";

    //Check if the user is logged in

    function checkIfLoggedin() {
        if (localStorage.getItem("savedName") != null) {
            if (appDashboard.classList.contains('app-welcome-dashboard_whitebg')) {
                appDashboard.classList.remove('app-welcome-dashboard_whitebg');
                loggedInDashboard.style.display = "grid";
                appWelcome.parentNode.removeChild(appWelcome);
                navbarNameField.innerText = localStorage.savedName;
            }
        } else {
            //If the user is not logged in the Welcome screen appears.
            appWelcome.style.display = "flex";
            sendNameBtn.addEventListener('click', function (e) {
                e.preventDefault();
                yourName = document.getElementById('name').value;
                localStorage.setItem('savedName', yourName);
                navbarNameField.innerText = localStorage.savedName;
                checkIfLoggedin();
            });
        }
    }

    //Always execute the function to check if the user is logged in.
    setTimeout(checkIfLoggedin, 250);



//this will select the active navbar menu element
    function setActive() {
        linkedPage = document.querySelector('.app-navbar').getElementsByTagName('a');
        navbarLi = document.querySelectorAll('.app-navbar__menu-item');
        for(i = 0 ; i < linkedPage.length; i++) {
            if(document.location.href.indexOf(linkedPage[i].href) >= 0) {
                navbarLi[i].className='open';
            }
        }
    }
    window.onload = setActive;


    //Add Plan
    //
    // var addPlan = document.querySelector(".adding-plan");
    // addPlan.addEventListener("click", function () {
    //     document.querySelector('.adding-new-plan').style.display='block';
    //
    // });




});