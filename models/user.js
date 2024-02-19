const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const User = new Schema(
    {
        userName: {type: String, required: true},
        fullName: {type: String, required: true},
        password: {type: String, required: true},
        symptomRating: [],
        savedRecipes: [],
        savedFoods: [],
    },
    {timestamps: true}
)

module.exports = User
