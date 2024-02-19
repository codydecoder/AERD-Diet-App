const mongoose = require('mongoose')
const UserSchema = require('./user')
const RecipeSchema = require('./recipe')
const FoodSchema = require('./food')

const User = mongoose.model('User', UserSchema)
const Recipe = mongoose.model('Recipe', RecipeSchema)
const Food = mongoose.model('Food', FoodSchema)

module.exports = {
    User,
    Recipe,
    Food
}