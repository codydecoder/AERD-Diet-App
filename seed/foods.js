const db = require('../db')
const { User, Recipe, Food } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  /*
  const livingRoom = await FurnSpace.find({spaceName: 'Living Room'})
  const diningRoom = await FurnSpace.find({spaceName: 'Dining Room'})
  const studyRoom = await FurnSpace.find({spaceName: 'Study Room'})
  const bedRoom = await FurnSpace.find({spaceName: 'Bedroom'})
  const patioRoom = await FurnSpace.find({spaceName: 'Patio'})
  */
  const foods = [
    {
      foodName: 'Canned Tuna',
      quantity: '1 cup',
      omegaSixContent: 13.9,
      omegaThreeContent: 433,
      omegaRatio: 0.03
    },
    {
      foodName: 'Celery',
      quantity: '85g',
      omegaSixContent: 0.067,
      omegaThreeContent: 0,
      omegaRatio: 671
    },
    {
      foodName: 'Onion',
      quantity: '85g',
      omegaSixContent: 0.011,
      omegaThreeContent: 0.003,
      omegaRatio: 3.2
    },
    {
      foodName: 'Non-fat Mayo',
      quantity: '1 cup',
      omegaSixContent: 110,
      omegaThreeContent: 48.6,
      omegaRatio: 2.26
    },
    {
      foodName: 'Non-fat Yogurt',
      quantity: '1 cup',
      omegaSixContent: 24.5,
      omegaThreeContent: 14.7,
      omegaRatio: 1.667
    },
    //
    {
      foodName: 'White Rice',
      quantity: '1/4 cup',
      omegaSixContent: .065,
      omegaThreeContent: .007,
      omegaRatio: 8.8
    },
    {
      foodName: 'Grass-Fed Butter',
      quantity: '1 tbsp',
      omegaSixContent: 0.231,
      omegaThreeContent: 0.231,
      omegaRatio: 1
    },
    {
      foodName: 'Black Beans',
      quantity: '130g',
      omegaSixContent: 0.164,
      omegaThreeContent: 0.137,
      omegaRatio: 1.2
    },
    {
      foodName: 'Bell Pepper',
      quantity: '85g',
      omegaSixContent: 0.038,
      omegaThreeContent: 0.021,
      omegaRatio: 1.8
    },
    {
      foodName: 'Garlic',
      quantity: '10g',
      omegaSixContent: 0.023,
      omegaThreeContent: 0.002,
      omegaRatio: 11
    },
    //
    {
      foodName: 'Coffee',
      quantity: '1 cup',
      omegaSixContent: 2.4,
      omegaThreeContent: 0,
      omegaRatio: 2.4
    },
    {
      foodName: 'Milk(2%)',
      quantity: '1 cup',
      omegaSixContent: 0.136,
      omegaThreeContent: 0.059,
      omegaRatio: 2.3
    },
    {
      foodName: 'Applesauce',
      quantity: '1 cup',
      omegaSixContent: 29.3,
      omegaThreeContent: 7.3,
      omegaRatio: 4.014
    }
  ]
 

  await Food.insertMany(foods)

  console.log('Created foods!')
}

const run = async () => {
  await main()
  db.close()
}

run()