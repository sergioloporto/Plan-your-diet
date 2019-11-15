document.addEventListener('DOMContentLoaded', function(){
    const loggedInDashboard = document.querySelector('.app-dashboard-logged-in');
    const addRecipe = document.querySelector('.app-dashboard-logged-in__add-recipe');
    const btnSaveClose = document.getElementById('saveClose');

    addRecipe.style.display = "none";
    //Open the recipes box
    addRecipeBtn = document.querySelector('.app-dashboard-widget-add-recipe');
    addPlanBtn = document.querySelector('.app-dashboard-widget-add-plan');

    addRecipeBtn.addEventListener('click', function () {
        loggedInDashboard.style.display = "none";
        addRecipe.classList.add('fade-in');
        addRecipe.style.display = "grid";
    });


    //Append icons to li items

        stepLi = document.querySelectorAll('.step');
        ingrLi = document.querySelectorAll('.ingr');
        let editIcon;
        let trashIcon;
        for (i = 0; i < stepLi.length; i++) {
            editIcon = document.createElement('i');
            trashIcon = document.createElement('i');
            editIcon.classList.add("fas", "fa-edit", "orange", "editicon");
            trashIcon.classList.add("fas", "fa-trash-alt", "red", "trashicon");
            stepLi[i].appendChild(editIcon);
            stepLi[i].appendChild(trashIcon);

        }
        for (i = 0; i < ingrLi.length; i++) {
            editIcon = document.createElement('i');
            trashIcon = document.createElement('i');
            editIcon.classList.add("fas", "fa-edit", "orange", "editicon");
            trashIcon.classList.add("fas", "fa-trash-alt", "red", "trashicon");
            ingrLi[i].appendChild(editIcon);
            ingrLi[i].appendChild(trashIcon);
        }


    function addEditAndTrashIcons(where) {
        editIcon = document.createElement('i');
        trashIcon = document.createElement('i');
        editIcon.classList.add("fas", "fa-edit", "orange", "editicon");
        trashIcon.classList.add("fas", "fa-trash-alt", "red", "trashicon");
        where.appendChild(editIcon);
        where.appendChild(trashIcon);
    }






    const allEditIcons = document.querySelectorAll('.editicon');
    const allTrashIcons = document.querySelectorAll('.trashicon');

    //Functionalność każdego Edit Icon
    for (i = 0; i < allEditIcons.length; i++) {
        allEditIcons[i].addEventListener('click', function () {
        });
    }
    //Functionalność każdego Trash Icon
    for (i = 0; i < allTrashIcons.length; i++) {
        allTrashIcons[i].addEventListener('click', function () {
        });
    }


///////////////////////////////
//         START LOCAL STORAGE
///////////////////////////////
const recipeTitle = document.getElementById('recipe-name');
const recipeDescription = document.getElementById('recipe-description');
const btnAddInstructions = document.getElementById('btnAddInstructions');
const btnAddIngredients = document.getElementById('btnAddIngredients');
const ulIngredientsList = document.getElementById('add-recipe__ingredients-list-ullist');
const olInstrucitonsList = document.getElementById('add-recipe__instructions-list-ollist');

    let newRecipe = {
        title: "",
        description: "",
        instructions:[],
        ingredients:[]
    };


    //////////////
    // ADD INSTRUCTIONS
    //////////////
    const instruction = document.getElementById('add-recipe-instructions');
    function renderNewInstruction(instruction) {
        let newInstruction = document.createElement('LI');
        newInstruction.innerText = instruction;
        olInstrucitonsList.appendChild(newInstruction);
        addEditAndTrashIcons(newInstruction);
    }

    btnAddInstructions.addEventListener('click', function () {
        newRecipe.instructions.push(instruction.value);
        renderNewInstruction(instruction.value);
        console.log(newRecipe)

    });




    //////////////
    // ADD INGREDIENTS
    //////////////
    const ingredient = document.getElementById('add-recipe-ingredients');
    function renderNewIngredient(ingredient) {
    let newIngredient = document.createElement('LI');
    newIngredient.innerText = ingredient;
    ulIngredientsList.appendChild(newIngredient);
    addEditAndTrashIcons(newIngredient);
    }

    btnAddIngredients.addEventListener('click', function () {
        newRecipe.ingredients.push(ingredient.value);
        renderNewIngredient(ingredient.value);
        console.log(newRecipe)
    });



    //////////////
    // SAVE RECIPE TO LOCAL STORAGE
    //////////////
    function saveRecipeToLocalStorage(newRecipe) {
        let dataFromLocalStorage = [];
        if (localStorage.getItem("recipes") != null) {
            dataFromLocalStorage = JSON.parse(localStorage.getItem("recipes"));
            dataFromLocalStorage.push(newRecipe);
            localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage))
        } else {
            dataFromLocalStorage.push(newRecipe);
            localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
        }
        alert("Przepis zapisany do localStorage");
    }

    btnSaveClose.addEventListener('click', function (e) {

        if (recipeTitle.value === "" || recipeDescription.value === ""){
            alert("Musisz uzupełnić wszystkie pola")
        } else {
            e.preventDefault();
            newRecipe.title = recipeTitle.value;
            newRecipe.description = recipeDescription.value;
            saveRecipeToLocalStorage(newRecipe);
            console.log("zapisano", newRecipe);
            // addRecipe.parentNode.removeChild(addRecipe);
            addRecipe.style.display = "none";
            loggedInDashboard.style.display = "grid";
            addRecipe.classList.add('fade-in');
        }



    });



});