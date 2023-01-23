const loadMeals = (search) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaymelas(data.meals))
}

const displaymelas = meals =>{
    // for(const meal of meals)
    // console.log(meal)

       const mealContainer = document.getElementById('meal-container');
       mealContainer.innerHTML = '';
       meals.forEach(meal => {
         //console.log(meal)

         const mealDiv = document.createElement('div')
         mealDiv.classList.add('col')
         mealDiv.innerHTML = `

         <div onclick = "loadMealDetail(${meal.idMeal})" class="card">
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">${meal.strMeal}</h5>
           <p class="card-text">${meal.strInstructions.slice(0,200)}}"</p>
         </div>
         
         `;

         mealContainer.appendChild(mealDiv)

});

}

const searchFood = () =>{

  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  loadMeals(searchText)

  searchField.value = '';
  //console.log('searching', searchText)
  
}

const loadMealDetail = (idmeal) => {

  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`
  //console.log(url)

  fetch(url)

  .then(res => res.json())
  //.then(data => displayMealDetail(data.meals[0]))
  .then(data => console.log(data.meals[0]))

}

   loadMeals('');




