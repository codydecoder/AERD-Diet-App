const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const User = new Schema(
    {
        userName: {type: String, required: true},
        fullName: {type: String, required: true},
        password: {type: String, required: true},
        //symptomRating: [],
        savedRecipes: [{type: Schema.Types.ObjectId, ref: 'recipe_id'}],
        savedFoods: [{type: Schema.Types.ObjectId, ref: 'food_id'}],
    },
    {timestamps: true}
)

module.exports = User
