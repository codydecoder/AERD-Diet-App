console.log('working!')

const allAerdInput = document.querySelector(`.allAerdInput`)
const searchButton = document.querySelector(`.allAerdSubmit`)

const foodGrid = document.querySelector(`.allFoodGrid`)
const recipeList = document.querySelector(`.allRecipeList`)

//allFoods load
/*window.addEventListener('load', async () => {
    let response = await axios.get(`http://localhost:3001/allFoods`)
    console.log(response.data)
    
    for(let a = 0; a < response.data.length; a++) {
        const newFood = document.createElement('div')
            newFood.classList.add('foodGridItem')

            const nFoodName = document.createElement('div')
                nFoodName.classList.add('foodName')
                nFoodName.innerHTML = `${response.data[a].foodName}`
                newFood.appendChild(nFoodName)
                
        
            const nFoodQuantity = document.createElement('div')
                nFoodQuantity.classList.add('foodQuantity')
                nFoodQuantity.innerHTML = `${response.data[a].quantity}`
                newFood.appendChild(nFoodQuantity)
        
            const nFoodO6 = document.createElement('div')
                nFoodO6.classList.add('foodO6')
                nFoodO6.innerHTML = `O-6: ${response.data[a].omegaSixContent} mg's`
                newFood.appendChild(nFoodO6)
        
            const nFoodO3 = document.createElement('div')
                nFoodO3.classList.add('foodO3')
                nFoodO3.innerHTML = `O-3: ${response.data[a].omegaThreeContent} mg's`
                newFood.appendChild(nFoodO3)
        
            const nFoodRatio = document.createElement('div')
                nFoodRatio.classList.add('food6to3Ratio')
                nFoodRatio.innerHTML = `6/3 Ratio: ${response.data[a].omegaRatio}`
                newFood.appendChild(nFoodRatio)


        foodGrid.appendChild(newFood)
    }
})*/
//allRecipes load
/*window.addEventListener('load', async () => {
    let response = await axios.get(`http://localhost:3001/allRecipes`)
    console.log(response.data)
    
    for(let b = 0; b < response.data.length; b++) {
        const newRecipe = document.createElement('div')
            newRecipe.classList.add('recipeListItem')

            const nRecipeName = document.createElement('div')
                nRecipeName.classList.add('recipeName')
                nRecipeName.innerHTML = `${response.data[b].recipeName}`
                newRecipe.appendChild(nRecipeName)
                
        
            const nFoodList = document.createElement('div')
                nFoodList.classList.add('recipeIngredients')
                nFoodList.innerHTML = `${response.data[b].foodList}`
                newRecipe.appendChild(nFoodList)
        
            const nRecipeO6 = document.createElement('div')
                nRecipeO6.classList.add('recipeO6')
                nRecipeO6.innerHTML = `O-6: ${response.data[b].cumulativeOSix} mg's`
                newRecipe.appendChild(nRecipeO6)
        
            const nRecipeO3 = document.createElement('div')
                nRecipeO3.classList.add('recipeO3')
                nRecipeO3.innerHTML = `O-3: ${response.data[b].cumulativeOThree} mg's`
                newRecipe.appendChild(nRecipeO3)
        
            const nRecipeInstructions = document.createElement('div')
                nRecipeInstructions.classList.add('recipeInstructions')
                nRecipeInstructions.innerHTML = `${response.data[b].recipeInstructions}`
                newRecipe.appendChild(nRecipeInstructions)


        recipeList.appendChild(newRecipe)
    }
})*/


//searchFoods
searchButton.addEventListener(`click`, async () => {
    let response = await axios.get(`http://localhost:3001/allFoods`)
    console.log(response.data)
    for(let i = 0; i < response.data.length; i++) {
        console.log(response.data[i].foodName)
        let sFoodName = response.data[i].foodName
        let sFood
    }

    for(let a = 0; a < response.data.length; a++) {
        const newFood = document.createElement('div')
            newFood.classList.add('foodGridItem')

        const nFoodName = document.createElement('div')
            nFoodName.classList.add('foodName')
            nFoodName.innerHTML = `${response.data[a].foodName}`
            newFood.appendChild(nFoodName)
            
    
        const nFoodQuantity = document.createElement('div')
            nFoodQuantity.classList.add('foodQuantity')
            nFoodQuantity.innerHTML = `${response.data[a].quantity}`
            newFood.appendChild(nFoodQuantity)
    
        const nFoodO6 = document.createElement('div')
            nFoodO6.classList.add('foodO6')
            nFoodO6.innerHTML = `O-6: ${response.data[a].omegaSixContent} mg's`
            newFood.appendChild(nFoodO6)
    
        const nFoodO3 = document.createElement('div')
            nFoodO3.classList.add('foodO3')
            nFoodO3.innerHTML = `O-3: ${response.data[a].omegaThreeContent} mg's`
            newFood.appendChild(nFoodO3)
    
        const nFoodRatio = document.createElement('div')
            nFoodRatio.classList.add('food6to3Ratio')
            nFoodRatio.innerHTML = `6/3 Ratio: ${response.data[a].omegaRatio}`
            newFood.appendChild(nFoodRatio)


    foodGrid.appendChild(newFood)
    }

})