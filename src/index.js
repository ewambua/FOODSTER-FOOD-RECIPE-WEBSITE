// Variables:
const recipeForm = document.querySelector("#recipe-form");
const results = document.querySelector("#results");


// Functions:
document.addEventListener("DOMContentLoaded", () => {
    recipeForm.addEventListener("submit", searchFoods);
 });

 const searchFoods = (e) => {
    e.preventDefault();
    const searchParameter = document.querySelector('#search').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParameter}`)
    .then(resp => resp.json())
    .then(data => { renderFoods(data.meals) })
    .catch(error => { alert("Recipes could not be found!") });

 }

function renderFoods(meals = []){
    meals.forEach(meal => {

        const html = `
            <div id="FoodCard" data-id="${meal.idMeal}" class="card ">
                <img id="FoodImage" src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <div class="container">
                <h4 id="FoodName">${meal.strMeal}</h4>
                    <div>
                        <button class="allbtns" id="foodRecipe" data-toggle="collapse" data-target="#demo">See Recipe</button>
                            <div id="demo" class="collapse bg-light bg-gradient">
                                <h4>Instructions for coocking (${meal.strMeal}) </h4>
                                <hr>
                                <p>${meal.strInstructions}</p>
                            </div>
                    </div>
                    <br>
                    <div>
                    <a href="${meal.strYoutube}javascript:alert('Video not Found.');"><button class="allbtns">Recipe Video Guide</button></a>
                    </div>
                    <br>
                </div>
            </div>
        `;
        results.insertAdjacentHTML('beforeend',html)
    })
}


