

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

        const h2Name = document.createElement('h2');
        h2Name.setAttribute('id', 'h2_name');
        h2Name.textContent = name;
        divTitle.appendChild(h2Name);

        const divTimeIcon = document.createElement('div');
        divTimeIcon.setAttribute('class', 'time_icone') 
        divTitle.appendChild(divTimeIcon);



        const icone = document.createElement('i');
        icone.setAttribute('class', "fa-regular fa-clock");
        divTimeIcon.appendChild(icone)

        const pTime = document.createElement('p');
        pTime.setAttribute('class', 'p_time');
        pTime.textContent = time + ' min';
        divTimeIcon.appendChild(pTime);

        const divRecipe = document.createElement('div');
        divRecipe.setAttribute('class', 'text_recipe');
        divText.appendChild(divRecipe);

        const divIngredients = document.createElement('div');
        divIngredients.setAttribute("class", 'div_ingredients');
        divRecipe.appendChild(divIngredients);


        ingredients.forEach(element => {
            const {ingredient, quantity, unit} = element;
            
            const pIngredients = document.createElement("p")
            pIngredients.setAttribute("class", "p_ingredients");
            pIngredients.textContent += ingredient  +  (quantity ? ": " +  quantity + " " + (unit ? unit:" ") : " ");
            divIngredients.appendChild(pIngredients);
        });

        
        

        const divDescription = document.createElement('div');
        divDescription.setAttribute('class', 'div_description');
        divDescription.textContent = description;
        divRecipe.appendChild(divDescription);


        return article;
    }

    return {displayRecipes};
}

function tagFactory(text) {
    
}