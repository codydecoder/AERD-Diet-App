const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Recipe = new Schema(
    {
        recipeName: {type: String, required: true},
        foodList: [{type: Schema.Types.ObjectId, ref: 'food_id'}],
        cumulativeOSix: {type: Number, required: true},
        cumalativeOThree: {type: Number, required: true},
        instructions: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = Recipe
