const { Food } = require('../models');

const getAllFoods = async (req,res) => {
    try {
        const foods = await Food.find()
        res.json(foods)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getFoodById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const foods = await Food.findById(id);
        if (foods) {
            return res.json(foods);
        }
        return res.status(404).send('Food not found!');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createFood = async (req, res) => {
    try {
        const foods = await new Food(req.body);
        await foods.save();
        return res.status(201).json({foods,});

    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

const updateFood = async (req, res) => {
    try {
        let { id } = req.params;
        let foods = await Food.findByIdAndUpdate(id, req.body, { new: true })
        if (foods) {
            return res.status(200).json(foods)
        }
        throw new Error("Food not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteFood = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Food.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Food deleted");
        }
        throw new Error("Food not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllFoods,
    getFoodById,
    createFood,
    updateFood,
    deleteFood
}