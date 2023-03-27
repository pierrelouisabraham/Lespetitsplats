async function displayData(recipes) {
    const recipesSection = document.querySelector(".card-recipes");
    recipes.forEach((recipe) => {
        const recipeModel = mediaFactory(recipe);
        const recipeCardDOM = recipeModel.displayRecipes();
        console.log(recipeCardDOM)
        recipesSection.appendChild(recipeCardDOM);
    });
};

async function init() {
   
    const { recipes } = await getRecipes();
    displayData(recipes); 
}

init();