const { Recipe } = require('../models');

const getAllRecipes = async (req,res) => {
    try {
        const recipes = await Recipe.find()
        res.json(recipes)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getRecipeById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const recipes = await Recipe.findById(id);
        if (recipes) {
            return res.json(recipes);
        }
        return res.status(404).send('Recipe not found!');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createRecipe = async (req, res) => {
    try {
        const recipes = await new Recipe(req.body);
        await recipes.save();
        return res.status(201).json({recipes,});

    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

const updateRecipe = async (req, res) => {
    try {
        let { id } = req.params;
        let recipes = await Recipe.findByIdAndUpdate(id, req.body, { new: true })
        if (recipes) {
            return res.status(200).json(recipes)
        }
        throw new Error("Recipe not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Recipe.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Recipe deleted");
        }
        throw new Error("Recipe not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
}
