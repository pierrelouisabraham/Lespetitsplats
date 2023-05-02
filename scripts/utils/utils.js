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

function filterBySearchWord(inputEntry) {
    texteInput = new RegExp(inputEntry, "i")
    console.log(inputEntry + "TEST")
    recipesToDisplay = recipes.filter((recipe) => {
        if(texteInput.test(recipe.name))
            return recipe;
        if(texteInput.test(recipe.description))
            return recipe;
        recipe.ingredients.forEach((ingredient) => {
            if (texteInput.test(ingredient.ingredient))
                return recipe;
            })
    }) 
}

//Chaque fois que l'on trouve un tag dans la recette on recompose le tableau à afficher
function filterByTag(data) {
    recipesToDisplay = data.filter((recipe) => {
        let ingredientsFound = [];
        let ustensilsFound = [];
        let appareilFound = [];
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

function filterTagByword(value, option) {
    if (option == "ingredient") {
        var ingredientToDisplay = [];
        ingredientSet.forEach((ingredient)=> {
        if (ingredient.includes(value))
            ingredientToDisplay.push(ingredient);
        optionIngredients.innerHTML = "";
        displayDropdown(option, ingredientToDisplay)
      })

    }

    if (option == "ustensil") {
        var ustensilToDisplay = [];
        ustensileSet.forEach((ustensil)=> {
        if (ustensil.includes(value))
            ustensilToDisplay.push(ustensil);

        optionUstensiles.innerHTML = "";
        displayDropdown(option, ustensilToDisplay)
      })
    }
    if (option == "appareil"){
        var apparelToDisplay = [];
        appareilSet.forEach((appareil)=> {
        if (appareil.includes(value))
            apparelToDisplay.push(appareil);
        optionAppareil.innerHTML = "";
        displayDropdown(option, ustensilToDisplay)
      })
    }
    
    
    
}

function displayDropdown(nature, arrayToDisplay) {
    arrayToDisplay.forEach(element => {
        const divDropdown = document.createElement("div");
        divDropdown.setAttribute("id", element);
        divDropdown.setAttribute("onclick", `onClickTag('${nature}','${element}')`);
        divDropdown.textContent = element;
        if (nature == 'ingredient') {
            divDropdown.setAttribute("class", "option_ingredient");
            optionIngredients.appendChild(divDropdown);
        }
        if (nature == 'ustensil') {
            divDropdown.setAttribute("onclick", `onClickTag('${nature}','${element}')`);
            optionUstensiles.appendChild(divDropdown);            
        }
        if(nature == 'appareil') {
            divDropdown.setAttribute("onclick", `onClickTag('${nature}','${element}')`);
            optionAppareil.appendChild(divDropdown);
        }
    });
}

