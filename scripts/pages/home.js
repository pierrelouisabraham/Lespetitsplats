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

const inputIgredient = document.querySelector("#ingredient_search")
const inputUstensile = document.querySelector("#ustensile_search")
const inputAppareils = document.querySelector("#appareils_search")

const divTag = document.querySelector(".tag-div");
const activeIngTags = []
const activeUstTags = []
const activeAppTags = []

var recipesToDisplay = [];

var n = 0;

function displayData() {
    const recipesSection = document.querySelector(".card-recipes");



    if (activeAppTags.length > 0 || activeUstTags.length > 0 || activeIngTags.length > 0 || inputSearch.value.length > 2) {
   
        if(inputSearch.value.length > 2) {
            filterBySearchWord(inputSearch.value)
            filterByTag(recipesToDisplay)
        }
        else
            filterByTag(recipes)

        }
     else {
         console.log("ALL EMPTY")
         recipesToDisplay = recipes;
     }
    recipesSection.innerHTML = '';

    ingredientSet.clear();
    appareilSet.clear();
    ustensileSet.clear();
    recipesToDisplay.forEach((recipe) => {
        console.log(recipe + "2")
        const recipeModel = recipeFactory(recipe);
        const recipeCardDOM = recipeModel.displayRecipes();
        recipesSection.appendChild(recipeCardDOM);
        getIngredients(recipe);
        getAppliance(recipe);
        getUstensils(recipe);
       
    });
    optionIngredients.innerHTML = "";
    optionAppareil.innerHTML = "";
    optionUstensiles.innerHTML = "";
    displayDropdownIngredients();
    displayDropdownAppareils();
    displayDropdownUstensils();
};

function rebuildwindow(data) {
    data.forEach((recipe) => {
        getIngredients(recipe);
        getAppliance(recipe);
        getUstensils(recipe);
    });
    displayDropdownIngredients();
    displayDropdownAppareils();
    displayDropdownUstensils();
    
    displayData();
}

function init() {
    rebuildwindow(recipes)
}


init();

// utiliser les event focus et blur pour actif ou non
// à factoriser
dropdown1.onclick = function() {
    dropdown1.classList.toggle("active");
    dropdown1.firstElementChild.setAttribute("placeholder", "recherche un ingredient")
    dropdown2.firstElementChild.setAttribute("placeholder", "appareil")
    dropdown3.firstElementChild.setAttribute("placeholder", "ustensile")
    dropdown2.classList.remove("active")
    dropdown3.classList.remove("active")
}


dropdown2.onclick = function() {
    dropdown2.classList.toggle("active")
    dropdown2.firstElementChild.setAttribute("placeholder", "recherche un appareil")
    dropdown1.firstElementChild.setAttribute("placeholder", "ingredient")
    dropdown3.firstElementChild.setAttribute("placeholder", "ustensile")
    dropdown1.classList.remove("active");
    dropdown3.classList.remove("active");

}


dropdown3.onclick = function() {
    dropdown3.classList.toggle("active")
    dropdown3.firstElementChild.setAttribute("placeholder", "recherche un ustensile")
    dropdown1.firstElementChild.setAttribute("placeholder", "ingredient")
    dropdown2.firstElementChild.setAttribute("placeholder", "appareil")
    dropdown1.classList.remove("active");
    dropdown2.classList.remove("active");
}


// à factoriser
function displayDropdownIngredients() {
    ingredientSet.forEach(element => {
        const divIngredient = document.createElement("div");
        divIngredient.setAttribute("class", "option_ingredient");
        divIngredient.setAttribute("id", element);
        divIngredient.setAttribute("onclick", `onClickTag('ingredient','${element}')`);
        divIngredient.textContent = element;
        optionIngredients.appendChild(divIngredient);
    });
}

function displayDropdownUstensils() {
    ustensileSet.forEach(element => {
        const divUstensil = document.createElement("div");
        divUstensil.setAttribute("class", "option_ustensils");
        divUstensil.setAttribute("id", element);
        divUstensil.setAttribute("onclick", `onClickTag('ustensil','${element}')`);
        divUstensil.textContent = element;
        optionUstensiles.appendChild(divUstensil);
    })
}

function displayDropdownAppareils() {
    appareilSet.forEach(element => {
        const divAppareil = document.createElement("div");
        divAppareil.setAttribute("class", "option_appareils");
        divAppareil.setAttribute("id", element);
        divAppareil.setAttribute("onclick", `onClickTag('appareil','${element}')`);
        divAppareil.textContent = element;
        optionAppareil.appendChild(divAppareil);
    })
}

function onClickTag(typeClass, id) {
    console.log(typeClass, id)
    if (typeClass == "ingredient" && !activeIngTags.includes(id)) {
        createTag(id, '#3282F7', typeClass);
        activeIngTags.push(id)
        console.log(recipes)
        rebuildwindow(recipes)
    }
    if (typeClass == "ustensil" && !activeUstTags.includes(id)) {
        createTag(id, '#ED6454', typeClass);
        activeUstTags.push(id)
        rebuildwindow(recipes)
    }
    if (typeClass == "appareil" && !activeAppTags.includes(id)) {
        createTag(id, '#68D9A4', typeClass);
        activeAppTags.push(id)
        rebuildwindow(recipes)
    }
}

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
    inputIgredient.value = '';
    inputAppareils.value = '';
    inputUstensile.value = '';
}

inputSearch.addEventListener("input", (evt) => {
    filterBySearchWord(evt.value)
    displayData()
})

inputIgredient.addEventListener("input", (evt) => {
    filterTagByword(inputIgredient.value, "ingredient");
})

inputUstensile.addEventListener("input", (evt) => {
    filterTagByword(inputUstensile.value, "ustensil");
})

inputAppareils.addEventListener("input", (evt) => {
    filterTagByword(inputAppareils.value, "appareil");

})

inputIgredient.addEventListener("blur", (evt) => {
    dropdown2.firstElementChild.setAttribute("placeholder", "appareil")
    dropdown3.firstElementChild.setAttribute("placeholder", "ustensile")
    dropdown2.classList.remove("active")
    dropdown3.classList.remove("active")
})

inputAppareils.addEventListener("blur", (evt) => {
    dropdown1.firstElementChild.setAttribute("placeholder", "ingredient")
    dropdown3.firstElementChild.setAttribute("placeholder", "ustensile")
    dropdown1.classList.remove("active");
    dropdown3.classList.remove("active");
})

inputUstensile.addEventListener("blur", (evt) => {
    dropdown1.firstElementChild.setAttribute("placeholder", "ingredient")
    dropdown2.firstElementChild.setAttribute("placeholder", "appareil")
    dropdown1.classList.remove("active");
    dropdown2.classList.remove("active");
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

    
    elt.remove();
    rebuildwindow(recipes);
}

