const loadMeals = (searchText) => {
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
const displayMeals = (meals) => {
    const mealsContainer = document.getElementById('meals-container')
    mealsContainer.innerText=''
    meals.forEach(meal => {
        // console.log(meal)
        const mealDiv = document.createElement('div')
        mealDiv.innerHTML = `
    <div class="col">
    <div class="card">
    <img src="${meal.strMealThumb}" class="card-img-top mx-auto mt-5" style="hight:100px; width:100px" alt="...">
    <div class="card-body  mx-auto">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strCategory}</p>
    <button onclick="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
    Details
  </button>
    </div>
</div>
    </div>`

        mealsContainer.appendChild(mealDiv)
    })
}
const searchMeals=()=>{
    const searchText=document.getElementById('search-field').value
    // console.log(searchText)
    loadMeals(searchText)
    // console.log('btn')
}
const loadMealDetails=idMeal=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMealsDetails(data.meals[0]))
    // console.log(idMeal)
}
const displayMealsDetails=meal=>{
document.getElementById('mealDetailsLabel').innerHTML=meal.strMeal
document.getElementById('mealDetailsBody').innerHTML=`
<img src="${meal.strMealThumb}" class="img-fluid" alt="...">
<p>Meals Instructions: ${meal.strInstructions}</p>
`

}
loadMeals('chicken')