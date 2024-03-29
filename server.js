const express = require('express') //express
const logger = require('morgan') //morgan
const bodyParser = require('body-parser')
const db = require('./db') //db
const cors = require('cors') //cors

const foodController = require('./controllers/foodController')
const recipeController = require('./controllers/recipeController')
const userController = require('./controllers/userController')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors())
app.use(express.json())

app.use(logger('dev'))
app.use(bodyParser.json())


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))



app.get('/', (req, res) => res.send('This is our landing page!'))

app.get('/allFoods', foodController.getAllFoods)
app.get('/allRecipes', recipeController.getAllRecipes)

// app.get('/plants/:id', plantController.getPlantById)

// app.post('/plants', plantController.createPlant)

// app.put('/plants/:id', plantController.updatePlant)

// app.delete('/plants/:id', plantController.deletePlant)

