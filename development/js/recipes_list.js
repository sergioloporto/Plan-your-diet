//5.1 if in przepisy keep the whitebachground
const whiteBG = document.querySelector('.app-welcome-dashboard_whitebg');
const arrayClickedLi = document.querySelectorAll('li');
const actualLiArray = Array.from(arrayClickedLi);
const aArray = document.querySelectorAll('a');
const actualArrayA = Array.from(aArray);

function urlCheck() {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page === 'recipes.html') {
        whiteBG.style.display = 'block';
    }
};
urlCheck();

// for (let i = 0; i < actualArrayA.length; i++) {
//     actualArrayA[i].addEventListener('click', function () {
//             actualArrayA[i].classList.add('hover-clicked');
//         }
//     )
// }
// ;

//////////////
// DISPLAY RECIPES FROM LOCAL STORAGE
//////////////

const importedTableRow = document.getElementById('recipe-list-value');
const newId = document.getElementById('recipe-list-counter');
const newName = document.getElementById('recipe-list-name');
const newDescription = document.getElementById('recipe-list-description');

const newRecipe = localStorage.getItem('recipes');
const newRecipeObject = JSON.parse(newRecipe);

importedTableRow.style.display = 'none';
const len = newRecipeObject.length;
for (let j = len - 1; j >= 0; j--) {
    let newTableRow = importedTableRow.cloneNode(true);
    //////ROW VALUES
    newId.innerText = j +1;
    // newId.innerText = newRecipeObject.indexOf(newRecipeObject[j]) + 1; - OTHER OPTION
    newName.innerText = newRecipeObject[j].title;
    newDescription.innerText = newRecipeObject[j].description;
    //////NEW ROW INSERTION
    importedTableRow.style.display = 'table-row';
    // tableContainer.appendChild(newTableRow);
    // - NOT WORKING LAST ITEM APPEARING AT THE BEGGINING
    importedTableRow.parentNode.insertBefore(newTableRow, importedTableRow.nextSibling);
};


// //Open the recipes box
// const addRecipeBtnRedirect = document.querySelector('.fa-plus-square');
//
//
// addRecipeBtnRedirect.addEventListener('click', function (event) {
//     event.preventDefault();
//     window.location.href = "app.html";
//     const loggedInDashboard = document.querySelector('.app-dashboard-logged-in');
//     const addRecipe = document.querySelector('.app-dashboard-logged-in__add-recipe');
//     loggedInDashboard.style.display = "none";
//     addRecipe.classList.add('fade-in');
//     addRecipe.style.display = "grid";
// });