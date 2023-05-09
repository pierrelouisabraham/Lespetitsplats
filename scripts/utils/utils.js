function getIngredients(data) {
    const  {ingredients} = data;
    ingredients.myForeach(element => {
        ingredientSet.add(element.ingredient.toLowerCase())
    });
}

function getAppliance(data) {
    const  {appliance} = data;
    appareilSet.add(appliance.toLowerCase());
}

function getUstensils(data) {
    const  {ustensils} = data;
    ustensils.myForeach(element => {
    ustensileSet.add(element.toLowerCase());
    });
}

function filterBySearchWord(inputEntry) {
    texteInput = new RegExp(inputEntry, "i")
    recipesToDisplay = recipes.filter((recipe) => {
        if(texteInput.test(recipe.name))
            return recipe;
        if(texteInput.test(recipe.description))
            return recipe;
        recipe.ingredients.myForeach((ingredient) => {
            if (texteInput.test(ingredient.ingredient))
                return recipe;
            })
    }) 
}

//Chaque fois que l'on trouve un tag dans la recette on recompose le tableau à afficher
function filterByTag(data) {
    recipesToDisplay = data.myFilter((recipe) => {
        let ingredientsFound = [];
        let ustensilsFound = [];
        let appareilFound = [];
        recipe.ingredients.myForeach((ingredient) => {
            if (activeIngTags.includes(ingredient.ingredient.toLowerCase())) {
                ingredientsFound.push(ingredient.ingredient.toLowerCase())
            }
        })
        
        recipe.ustensils.myForeach((ustensil) => {
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
        ingredientSet.myForeach((ingredient)=> {
        if (ingredient.includes(value))
            ingredientToDisplay.push(ingredient);
        optionIngredients.innerHTML = "";
        displayDropdown(option, ingredientToDisplay)
      })

    }
    if (option == "ustensil") {
        var ustensilToDisplay = [];
        ustensileSet.myForeach((ustensil)=> {
        if (ustensil.includes(value))
            ustensilToDisplay.push(ustensil);

        optionUstensiles.innerHTML = "";
        displayDropdown(option, ustensilToDisplay)
      })
    }
    if (option == "appareil"){
        var apparelToDisplay = [];
        appareilSet.myForeach((appareil)=> {
        if (appareil.includes(value))
            apparelToDisplay.push(appareil);
        optionAppareil.innerHTML = "";
        displayDropdown(option, apparelToDisplay)
      })
    }
    
    
    
}

function displayDropdown(nature, arrayToDisplay) {
    arrayToDisplay.myForeach(element => {
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

Array.prototype.myFilter = function(callback){
    var result = [];
    for (let i = 0; i < this.length; i++) {
      let isFound = callback(this[i], i, this)
      if(isFound){
        result.push(this[i])
      }
    }
    return result
  }

  Array.prototype.myForeach = function(callback){
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this)
    }
  }