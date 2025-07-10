import express from 'express'
import Recipe from '../models/Recipe.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const recipes = await Recipe.find().sort({ createdAt: -1 })
  res.json(recipes)
})

router.post('/', async (req, res) => {
  const { title, ingredients, category } = req.body
  const recipe = await Recipe.create({ title, ingredients, category })
  res.status(201).json(recipe)
})

export default router