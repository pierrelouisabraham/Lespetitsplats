function getIngredients(data) {
    const  {ingredients} = data;
    ingredients.forEach(element => {
        const {ingredient} = element;
        
        ingredientSet.add(ingredient)
        
    });
}

function getAppliance(data) {
    const  {appliance} = data;

    appareilSet.add(appliance);

    console.log(appareilSet)
}

function getUstensils(data) {
    const  {ustensils} = data;

    ustensils.forEach(element => {
    ustensileSet.add(element);
    });

    console.log(ustensileSet)
}