const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Food = new Schema(
    {
        foodName: {type: String, required: true},
        omegaSixContent: {type: Number, required: true},
        omegaThreeContent: {type: Number, required: true},
        omegaRatio: {type: Number, required: true},
        calories: {type: Number, required: true},
        protein: {type: Number, required: true},
    },
    {timestamps: true}
)

module.exports = Food
