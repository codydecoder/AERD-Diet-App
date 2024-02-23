const db = require('../db')
const { User, Recipe, Food } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  
  const cannedTunaFishSalad = await Recipe.find({recipeName: 'Canned Tuna Fish Salad'})
  const blackBeansAndRice = await Recipe.find({recipeName: 'Black Beans & Rice'})
  const coffee = await Food.find({foodName: 'Coffee'})
  const milk = await Food.find({foodName: 'Milk'})
  const applesauce = await Food.find({foodName: 'Applesauce'})
  
  

  const users = [
    {
      userName: `coderDecoder`,
      fullName: 'Cody Cadena',
      password: 'DietFood321',
      //symptomRating: [],
      savedRecipes: [
        blackBeansAndRice[0]._id
      ],
      savedFoods: [
        coffee[0]._id,
        milk[0]._id,
        applesauce[0]._id
      ],
    },
    {
      userName: `joyfull`,
      fullName: 'Joy Cameron',
      password: 'Password123',
      //symptomRating: [],
      savedRecipes: [
        cannedTunaFishSalad[0]._id,
      ],
      savedFoods: [
        applesauce[0]._id
      ],
    }
  ]
 

  await User.insertMany(users)

  console.log('Created users!')
}

const run = async () => {
  await main()
  db.close()
}

run()