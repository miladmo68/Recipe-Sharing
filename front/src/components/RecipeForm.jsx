import { useState } from 'react'
import { addRecipe, fetchRecipes } from '../utils/api'

export default function RecipeForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addRecipe({ title, ingredients, category })
    setTitle('')
    setIngredients('')
    setCategory('')
    onAdd(await fetchRecipes())
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        className="input input-bordered w-full mb-2"
        placeholder="Recipe Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        className="input input-bordered w-full mb-2"
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChange={e => setIngredients(e.target.value)}
      />
      <input
        className="input input-bordered w-full mb-2"
        placeholder="Category"
        value={category}
        onChange={e => setCategory(e.target.value)}
      />
      <button className="btn btn-primary">Add Recipe</button>
    </form>
  )
}