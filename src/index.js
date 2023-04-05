// Variables:
const recipeForm = document.querySelector("#recipe-form");
const results = document.querySelector("#results");









document.addEventListener("DOMContentLoaded", () => {
    recipeForm.addEventListener("submit", searchFoods);
 });

 const searchFoods = (e) => {
    e.preventDefault();
    const searchParameter = document.querySelector('#search').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchParameter}`)
    .then(resp => resp.json())
    .then(data => { renderFoods(data.meals) })
    // .catch(error => { alert("There seems to be an error!") });

 }

function renderFoods(meals = []){
    meals.forEach(meal => {

        const html = `
            <div id="FoodCard" data-id="${meal.idMeal}" class="card">
                <img id="FoodImage" src="${meal.strMealThumb}" alt="Food Image">
                <div class="container">
                    <h4 id="FoodName">${meal.strMeal}</h4>
                    <div>
                    <button class="allbtns" id="foodRecipe">See Recipe</button>
                    </div>
                    <br>
                    <div>
                    <button class="allbtns" id="nutritionDetails">Nutrition Details</button>
                    </div>
                    <br>
                </div>
            </div>
        `;
        results.insertAdjacentHTML('beforeend',html)
      })

}

