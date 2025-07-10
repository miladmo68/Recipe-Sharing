import { createContext, useState, useEffect } from 'react'
import { fetchRecipes } from '../utils/api'

export const RecipeContext = createContext()

export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetchRecipes().then(setRecipes)
  }, [])

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipeContext.Provider>
  )
}