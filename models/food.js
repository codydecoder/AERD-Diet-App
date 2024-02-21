const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Food = new Schema(
    {
        foodName: {type: String, required: true},
        quantity: {type: String, required: true},
        omegaSixContent: {type: Number, required: true}, //in milligrams
        omegaThreeContent: {type: Number, required: true}, //in milligrams
        omegaRatio: {type: Number, required: true} //six-dividedBy-three
    },
    {timestamps: true}
)

module.exports = Food
