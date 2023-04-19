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

// faire une boucle qui fait tout