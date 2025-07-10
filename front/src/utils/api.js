import axios from 'axios'
const API_URL = 'http://localhost:5000/api/recipes'

export const fetchRecipes = async () => {
  const res = await axios.get(API_URL)
  return res.data
}

export const addRecipe = async (recipe) => {
  const res = await axios.post(API_URL, recipe)
  return res.data
}