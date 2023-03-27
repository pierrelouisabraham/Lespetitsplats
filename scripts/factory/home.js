function mediaFactory(data){
    const  {id, name, ingredients, time, description} = data;
    
    function displayRecipes() {
        const article = document.createElement('article');
        article.setAttribute("id", "name_card");

        const divBack = document.createElement('div');
        divBack.setAttribute("id", "back_img");

        const divText = document.createElement('div');
        divText.setAttribute("id", "div_text");

        article.appendChild(divBack);
        article.appendChild(divText);

        const divTitle = document.createElement('div');
        divTitle.setAttribute('id', 'div_title');
        divText.appendChild(divTitle);

        const divName = document.createElement('h2');
        divName.setAttribute('id', 'div_name');
        divName.textContent = name;
        divTitle.appendChild(divName);

        const icone = document.createElement('i');
        icone.setAttribute('class', "fa-regular fa-clock");
        divTitle.appendChild(icone)

        const pTime = document.createElement('p');
        pTime.setAttribute('class', 'p_time');
        pTime.textContent = time + ' min';
        divTitle.appendChild(pTime)

        const divIngredients = document.createElement('div');
        divIngredients.setAttribute("class", 'div_ingredients');
        divText.appendChild(divIngredients);

        const pIngredients = document.createElement("p")
        pIngredients.setAttribute("class", "p_ingredients");

        ingredients.forEach(element => {
            const {ingredient, quantity, unit} = element;
            
            pIngredients.textContent += ingredient + ":" + quantity + unit;
            console.log(element)
        });

        
        divIngredients.appendChild(pIngredients);
        return article;
    }

    return {displayRecipes};
}

function tagFactory(text) {
    
}