const ingredientSet  = new Set();
const ustensileSet  = new Set();
const appareilSet  = new Set();

const inputSearch = document.querySelector(".input-search");

const dropdown1 = document.querySelector("#dropdown_ingredients");
const dropdown2 = document.querySelector("#dropdown_appareils");
const dropdown3 = document.querySelector("#dropdown_ustensile");

const optionIngredients = document.querySelector("#options_ingredients");
const optionUstensiles = document.querySelector("#options_ustensile");
const optionAppareil = document.querySelector("#options_appareils");

const divTag = document.querySelector(".tag-div");
var activeIngTags = []
var activeUstTags = []
var activeAppTags = []


function displayData() {
    const recipesSection = document.querySelector(".card-recipes");



    if (activeAppTags.length > 0 || activeUstTags.length > 0 || activeIngTags.length > 0) {
        console.log("ONe is full")
        recipesToDisplay = recipes.filter((recipe) => {

            let ingredientsFound = [];
            let ustensilsFound = [];
            let appareilFound = [];
            console.log(activeAppTags)
            console.log(activeIngTags)
            console.log(activeUstTags)
            recipe.ingredients.forEach((ingredient) => {
                if (activeIngTags.includes(ingredient.ingredient)) {
                    ingredientsFound.push(ingredient.ingredient)
                }
            })
            
            recipe.ustensils.forEach((ustensil) => {
                if (activeUstTags.includes(ustensil)) {
                    ustensilsFound.push(ustensil)
                }
            })
            
            if (activeAppTags.includes(recipe.appliance)) {
                appareilFound.push(appareilFound)
            }
    
            return (
                activeIngTags.every((ingredient) => ingredientsFound.includes(ingredient)) &&
                activeUstTags.every((ustensil) => ustensilsFound.includes(ustensil)) &&
                appareilFound) 
        });
        
        console.log(recipesToDisplay)

    }
    else {
        console.log("ALL EMPTY")
        recipesToDisplay = recipes;
    }

    // reset affichage ou display none les non concernés
    recipesSection.innerHTML = '';
    // On affiche
    recipesToDisplay.forEach((recipe) => {
        const recipeModel = recipeFactory(recipe);
        const recipeCardDOM = recipeModel.displayRecipes();
        recipesSection.appendChild(recipeCardDOM);
       
    });
    



};

function init() {
    recipes.forEach((recipe) => {
        getIngredients(recipe);
        getAppliance(recipe);
        getUstensils(recipe);
    });
    displayDropdownIngredients();
    displayDropdownAppareils();
    displayDropdownUstensils();
    displayData();
    
}


init();

// utiliser les event focus et blur pour actif ou non
// à factoriser
dropdown1.onclick = function() {
    dropdown1.classList.toggle("active");
}


dropdown2.onclick = function() {
    dropdown2.classList.toggle("active")
}


dropdown3.onclick = function() {
    dropdown3.classList.toggle("active")
}


//input doit passer en inline-block avec une largeur de son parent qui doit s'adapter au contenue offsetWidth

//mettre input dans la div option mettre en block ou inline-block


// à factoriser
 function displayDropdownIngredients() {
    ingredientSet.forEach(element => {
        const divIngredient = document.createElement("div");
        divIngredient.setAttribute("class", "option_ingredient");
        divIngredient.setAttribute("id", element);
        divIngredient.textContent = element;
        optionIngredients.appendChild(divIngredient);
    });
}

function displayDropdownUstensils() {
    ustensileSet.forEach(element => {
        const divUstensil = document.createElement("div");
        divUstensil.setAttribute("class", "option_ustensils");
        divUstensil.setAttribute("id", element);
        divUstensil.textContent = element;
        optionUstensiles.appendChild(divUstensil);
    })
}

function displayDropdownAppareils() {
    appareilSet.forEach(element => {
        const divAppareil = document.createElement("div");
        divAppareil.setAttribute("class", "option_appareils");
        divAppareil.setAttribute("id", element);
        divAppareil.textContent = element;
        optionAppareil.appendChild(divAppareil);
    })
}


const ingredients = document.querySelectorAll('.option_ingredient');
ingredients.forEach(el => el.addEventListener('click', event => {
    if (!activeIngTags.includes(event.target.getAttribute("id"))) {
        createTag(event.target.getAttribute("id"), '#3282F7', 'ingredient');
        activeIngTags.push(event.target.getAttribute("id"))
        displayData()
    }
  }));

  const appareils = document.querySelectorAll('.option_appareils');
  appareils.forEach(el => el.addEventListener('click', event => {
    if (!activeAppTags.includes(event.target.getAttribute("id"))) {
        createTag(event.target.getAttribute("id"), '#68D9A4', 'appareil');
        activeAppTags.push(event.target.getAttribute("id"))
        displayData()
    }
    
  }));

  const ustensils = document.querySelectorAll('.option_ustensils');
  ustensils.forEach(el => el.addEventListener('click', event => {
    if (!activeUstTags.includes(event.target.getAttribute("id"))) {
        createTag(event.target.getAttribute("id"), '#ED6454', 'ustensil');
        activeUstTags.push(event.target.getAttribute("id"))
        displayData()
    }
    
  }));

function createTag(texte, color, category) {
    const divTagAdd = document.createElement("div");
    divTagAdd.setAttribute("class", "tag");
    divTagAdd.setAttribute("category", category);
    divTagAdd.setAttribute("id", texte);
    divTagAdd.style.backgroundColor = color;
    divTagAdd.textContent = texte;
    divTag.appendChild(divTagAdd);

    const spanExit = document.createElement("span");
    spanExit.setAttribute("class", "exit");
    divTagAdd.appendChild(spanExit);
    const iconExit = document.createElement("i");
    iconExit.setAttribute('class', 'fa-regular fa-circle-xmark');
    iconExit.setAttribute('onClick', `suppressElement('${texte}')`);
    spanExit.appendChild(iconExit);
}


inputSearch.addEventListener("focus", () => {
})

function suppressElement(id) {
    elt = document.getElementById(id)
    elt_category = elt.getAttribute("category")

    if (elt_category == "ingredient") {
        activeIngTags.splice(activeIngTags.indexOf(id), 1)
    }

    if (elt_category == "ustensil") {
        activeUstTags.splice(activeUstTags.indexOf(id), 1)
    }

    if (elt_category == "appareil") {
        activeAppTags.splice(activeAppTags.indexOf(id), 1)
    }

    displayData();
    elt.remove();
}

