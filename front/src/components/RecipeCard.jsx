export default function RecipeCard({ recipe }) {
  return (
    <div className="card bg-base-100 shadow-md p-4 mb-4">
      <h2 className="text-xl font-bold">{recipe.title}</h2>
      <p className="text-sm text-gray-500 mb-1">{recipe.category}</p>
      <p>{recipe.ingredients}</p>
    </div>
  )
}