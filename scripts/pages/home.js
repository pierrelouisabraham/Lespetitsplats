const ingredientSet  = new Set();
const ustensileSet  = new Set();
const appareilSet  = new Set();

const dropdown1 = document.querySelector("#dropdown_ingredients")
const dropdown2 = document.querySelector("#dropdown_appareils")
const dropdown3 = document.querySelector("#dropdown_ustensile")

const optionIngredients = document.querySelector("#options_ingredients")
const optionUstensiles = document.querySelector("#options_ustensile")
const optionAppareil = document.querySelector("#options_appareils")


async function displayData(recipes) {
    const recipesSection = document.querySelector(".card-recipes");
    
    recipes.forEach((recipe) => {
        const recipeModel = mediaFactory(recipe);
        const recipeCardDOM = recipeModel.displayRecipes();
        recipesSection.appendChild(recipeCardDOM);
        //ingredientsSection.appendChild(dropdownIngredients);
    });
};

async function init() {
   
    // utiliser set pour les tags
    recipes.forEach((recipe) => {
    getIngredients(recipe);
    getAppliance(recipe);
    getUstensils(recipe);
    });
    displayDropdownIngredients();
    displayDropdownAppareils();
    displayDropdownUstensils();
    displayData(recipes);
    
}

init();


dropdown1.onclick = function() {
    dropdown1.classList.toggle("active")
}


dropdown2.onclick = function() {
    dropdown2.classList.toggle("active")
}


dropdown3.onclick = function() {
    dropdown3.classList.toggle("active")
}

 function displayDropdownIngredients() {
    console.log(ingredientSet)
    ingredientSet.forEach(element => {
        const divIngredient = document.createElement("div");
        divIngredient.setAttribute("class", "option_ingredient");
        divIngredient.textContent = element;
        optionIngredients.appendChild(divIngredient)
        console.log(element)
    })
}

function displayDropdownUstensils() {
    ustensileSet.forEach(element => {
        const divUstensil = document.createElement("div");
        divUstensil.setAttribute("class", "option_ingredient");
        divUstensil.textContent = element;
        optionUstensiles.appendChild(divUstensil)
        console.log(element)
    })
}

function displayDropdownAppareils() {
    appareilSet.forEach(element => {
        const divAppareil = document.createElement("div");
        divAppareil.setAttribute("class", "option_ingredient");
        divAppareil.textContent = element;
        optionAppareil.appendChild(divAppareil)
        console.log(element)
    })
}