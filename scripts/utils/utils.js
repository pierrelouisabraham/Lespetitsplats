async function getObjectFromJson(url) {
    try{
    const response = await fetch(url);
    const data = await response.json();
     return data;
    } catch (e) {
     console.log(e)
    }
 }

 async function getRecipes() {
    const data = await getObjectFromJson('../data/recipes.json');
    const recipes = await data["recipes"];
    return ({
        recipes: [...recipes]})
 }