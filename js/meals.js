const loadMeals = (search) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=a`
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
         console.log(meal)
    

})
}

loadMeals()




