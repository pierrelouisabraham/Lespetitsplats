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


function displayData(recipes) {
    const recipesSection = document.querySelector(".card-recipes");
    
    recipes.forEach((recipe) => {
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
    displayData(recipes);
    
}

/* data-id rechercher sur les id et faire un display none*/

init();

// utiliser les event focus et blur pour actif ou non
dropdown1.onclick = function() {
    dropdown1.classList.toggle("active");
}


dropdown2.onclick = function() {
    dropdown2.classList.toggle("active")
}


dropdown3.onclick = function() {
    dropdown3.classList.toggle("active")
}


// à factoriser
 function displayDropdownIngredients() {
    ingredientSet.forEach(element => {
        const divIngredient = document.createElement("div");
        divIngredient.setAttribute("class", "option_ingredient");
        divIngredient.setAttribute("id", element);
        divIngredient.setAttribute("onClick", "createTag()");
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
    createTag(event.target.getAttribute("id"), '#3282F7');
  }));

  const appareils = document.querySelectorAll('.option_appareils');
  appareils.forEach(el => el.addEventListener('click', event => {
    createTag(event.target.getAttribute("id"), '#68D9A4');
  }));

  const ustensils = document.querySelectorAll('.option_ustensils');
  ustensils.forEach(el => el.addEventListener('click', event => {
    createTag(event.target.getAttribute("id"), '#ED6454');
  }));

function createTag(texte, color) {
    const divTagAdd = document.createElement("div");
    divTagAdd.setAttribute("class", "tag");
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
    console.log(texte, color)
}



inputSearch.addEventListener("focus", () => {
    console.log("test")
})

function suppressElement(id) {
    document.getElementById(id).remove();
}

