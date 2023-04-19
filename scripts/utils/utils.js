function getIngredients(data) {
    const  {ingredients} = data;
    ingredients.forEach(element => {
        ingredientSet.add(element.ingredient.toLowerCase())
    });
}

function getAppliance(data) {
    const  {appliance} = data;
    appareilSet.add(appliance.toLowerCase());
}

function getUstensils(data) {
    const  {ustensils} = data;
    ustensils.forEach(element => {
    ustensileSet.add(element.toLowerCase());
    });
}

function filterByTag(data) {
    recipesToDisplay = data.filter((recipe) => {
        console.log(recipesToDisplay.length + "begin loop")
        let ingredientsFound = [];
        let ustensilsFound = [];
        let appareilFound = [];
        console.log(activeAppTags)
        console.log(activeIngTags)
        console.log(activeUstTags)
        console.log(inputSearch.value)
        recipe.ingredients.forEach((ingredient) => {
            if (activeIngTags.includes(ingredient.ingredient.toLowerCase())) {
                ingredientsFound.push(ingredient.ingredient.toLowerCase())
            }
        })
        
        recipe.ustensils.forEach((ustensil) => {
            if (activeUstTags.includes(ustensil.toLowerCase())) {
                ustensilsFound.push(ustensil.toLowerCase())
            }
        })
        
        if (activeAppTags.includes(recipe.appliance.toLowerCase())) {
            appareilFound.push(recipe.appliance.toLowerCase())
        }
        
            return (
                activeIngTags.every((ingredient) => ingredientsFound.includes(ingredient.toLowerCase())) &&
                activeUstTags.every((ustensil) => ustensilsFound.includes(ustensil.toLowerCase())) &&
                activeAppTags.every((appareil) => appareil.includes(recipe.appliance.toLowerCase())))
           
       
        
    });

    return recipesToDisplay;
}


// faire une boucle qui fait tout