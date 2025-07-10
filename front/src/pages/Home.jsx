import { useContext } from 'react'
import { RecipeContext } from '../context/RecipeContext'
import RecipeCard from '../components/RecipeCard'
import RecipeForm from '../components/RecipeForm'

export default function Home() {
  const { recipes, setRecipes } = useContext(RecipeContext)

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">🍽 Recipe Sharing</h1>
      <RecipeForm onAdd={setRecipes} />
      {recipes.map(recipe => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </>
  )
}