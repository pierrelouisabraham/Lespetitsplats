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

function filterBySearchWord(inputEntry, recipesAll) {
    texteInput = new RegExp(inputEntry, "i")
    recipesSection.innerHTML = '';
  
    recipesToDisplay = recipesAll.filter((recipe) => {
        let toDisplay = false;
        if(texteInput.test(recipe.name) || texteInput.test(recipe.description)) {
            toDisplay = true
        }
            
        recipe.ingredients.forEach((ingredient) => {
            if (texteInput.test(ingredient.ingredient))
            toDisplay = true
                
            })
        if(toDisplay == true) {
                const recipeModel = recipeFactory(recipe);
                const recipeCardDOM = recipeModel.displayRecipes();
                recipesSection.appendChild(recipeCardDOM);
                getIngredients(recipe);
                getAppliance(recipe);
                getUstensils(recipe);
               
                return recipe;
        }
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
        displayDropdown(option, apparelToDisplay)
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
            divDropdown.setAttribute("class", "option_ustensils");
            optionUstensiles.appendChild(divDropdown);            
        }
        if(nature == 'appareil') {
            divDropdown.setAttribute("class", "option_appareils");
            optionAppareil.appendChild(divDropdown);
        }
    });
}
