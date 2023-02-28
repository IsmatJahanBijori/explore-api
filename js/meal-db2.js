const loadMeals=(searchText)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url).then(res=>res.json()).then(data=>displayMeals(data.meals))
}

const displayMeals=(meals)=>{
    const mealsContainer=document.getElementById('meals-container')
    // console.log(typeof meals)
    mealsContainer.textContent= ""
    // age ja thakbe seta khali korar jonne textContent blank
    document.getElementById('search-field').value= ""
    // age ja input field e thakbe seta khali korar jonne blank
    meals.forEach(meal=>{
        // console.log(meal.idMeal)
        // console.log(typeof meal)
        const div=document.createElement('div')
        const {strMeal,strMealThumb,strInstructions,idMeal}=meal;
        div.classList.add('col')
        div.innerHTML=`
        <div class="card">
          <img src="${strMealThumb}" class="card-img-top p-2" alt="...">
          <div class="card-body">
            <h5 class="card-title">${strMeal}</h5>
            <p class="card-text">${strInstructions.slice(0, 150) + "..."}</p>
          </div>
          <button onclick="loadMealsDetails('${idMeal}')" id="btn-details" type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modalDetails">Details</button>
      </div>`
      mealsContainer.appendChild(div)
    })
}

// modal execution
const loadMealsDetails=(id)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url).then(res=>res.json()).then(data=>displayMealsDetails(data.meals[0]))
}

const displayMealsDetails=(mealDetails)=>{
    document.getElementById('modalDetailsLabel').innerText=mealDetails.strMeal
    document.getElementById('modalDetailsLabelBody').innerHTML=`
    <img src="${mealDetails.strMealThumb}" class="img-fluid p-3" alt="...">
    <p class="card-text">${mealDetails.strInstructions}</p>
    `

}


//search text value 
const loadMealsData=(datalimit)=>{
const searchValue=document.getElementById('search-field')
const searchText=searchValue.value
// console.log(searchText)
loadMeals(searchText, datalimit)
}

// search enter button
document.getElementById('search-field').addEventListener('keypress', function(e){
    if(e.key==='Enter'){
        loadMealsData(10)
        // console.log(e.key)
    }
})
loadMeals('rice')