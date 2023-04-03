const ingredientSet  = new Set();
const ustensileSet  = new Set();
const appareilSet  = new Set();


async function displayData(recipes) {
    const recipesSection = document.querySelector(".card-recipes");
    const ingredientsSection = document.querySelector("#options_ingredients");
    recipes.forEach((recipe) => {
        const recipeModel = mediaFactory(recipe);
        const dropdownIngredients = recipeModel.displayIngredients();
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
    displayData(recipes); 
}

init();

var dropdown1 = document.querySelector("#dropdown_ingredients")
dropdown1.onclick = function() {
    dropdown1.classList.toggle("active")
}

var dropdown2 = document.querySelector("#dropdown_appareils")
dropdown2.onclick = function() {
    dropdown2.classList.toggle("active")
}

var dropdown3 = document.querySelector("#dropdown_ustensile")
dropdown3.onclick = function() {
    dropdown3.classList.toggle("active")
}