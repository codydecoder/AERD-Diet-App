const db = require('../db')
const { User, Recipe, Food } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  
  const cannedTuna = await Food.find({foodName: 'Canned Tuna'})
  const celery = await Food.find({foodName: 'Celery'})
  const onion = await Food.find({foodName: 'Onion'})
  const mayo = await Food.find({foodName: 'Non-fat Mayo'})
  const yogurt = await Food.find({foodName: 'Non-fat Yogurt'})
  const whiteRice = await Food.find({foodName: 'White Rice'})
  const grassFedButter = await Food.find({foodName: 'Grass-Fed Butter'})
  const blackBeans = await Food.find({foodName: 'Black Beans'})
  const bellPepper = await Food.find({foodName: 'Bell Pepper'})
  const garlic = await Food.find({foodName: 'Garlic'})

  console.log(cannedTuna)

  const recipes = [
    {
      recipeName: 'Canned Tuna Fish Salad',
      foodList: [
        cannedTuna[0]._id,
        celery[0]._id,
        onion[0]._id,
        mayo[0]._id,
        yogurt[0]._id,
      ],
      cumulativeOSix: 120,
      cumulativeOThree: 478,
      instructions: `1(6oz) can of tuna, light, packed in water
      1 medium 6-inch stalk of celery chopped(1/4 cup)
      ½ small onion, chopped(1/4 cup)
      ¼ cup fat-free mayonnaise
      ¼ cup fat-free plain yogurt
      ½ tsp fresh lemon juice(optional, doesn't contribute much to o-3/6 content)
      ¼ tsp garlic powder(optional, doesn't contribute much to o-3/6 content)
      1 TBSP chopped fresh parsley(optional, doesn't contribute much to o-3/6 content)
      Salt and pepper to taste
      In a large bowl, combine the tuna, celery, onion, mayonnaise, yogurt, lemon juice, parsley, garlic powder, salt and pepper. Mix well and refrigerate until chilled.`
    },
    {
      recipeName: 'Black Beans & Rice',
      foodList: [
        whiteRice[0]._id,
        grassFedButter[0]._id,
        blackBeans[0]._id,
        bellPepper[0]._id,
        garlic[0]._id,
      ],
      cumulativeOSix: 853,
      cumulativeOThree: 520,
      instructions: `1 cup uncooked white rice(medium or long-grain)
      1 TBSP Grass-Fed butter
      1 can(16 oz) black beans
      ½ of a medium fresh red bell pepper, chopped(about ½ cup)
      1 small onion, chopped(about ½ cup)
      2 cloves of garlic, minced
      2 TBSP white vinegar
      ½ tsp Tabasco sauce(optional, doesn't contribute much to o-3/6 content)
      1 tsp dried oregano(optional, doesn't contribute much to o-3/6 content)
      1 TBSP chopped fresh cilantro(optional, doesn't contribute much to o-3/6 content)
      Salt and pepper to taste
      Cook rice in water according to package instructions. White rice usually takes 15 minutes to cook
      once the water is simmering, and 10 minutes to sit.
      Heat butter in a large skillet on medium high. Sauté onions and bell pepper for 3-4 minutes, until
      just beginning to soften, then add garlic and sauté a minute more. Add the black beans, vinegar
      and Tabasco. Bring to a boil, reduce heat, cover and simmer for 5 minutes.
      Stir in rice and oregano. Add salt and pepper to taste and top with fresh cilantro.`
    }
  ]
 

  await Recipe.insertMany(recipes)

  console.log('Created recipes!')
}

const run = async () => {
  await main()
  db.close()
}

run()