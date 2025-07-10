import mongoose from 'mongoose'

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: String,
  category: String
}, { timestamps: true })

export default mongoose.model('Recipe', recipeSchema)