"use client"

import { useUserContext } from "@/context/context"
import { userContextType } from "@/types/types"
import RecipeCard from "@/components/RecipeCard"
import { useState, useEffect } from "react"

export default function Home() {

  const [recipe, setRecipe] = useState<any>(null)
  const { user } = useUserContext() as userContextType


  const fetchRandomMeal = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}random.php`)
      const data = await response.json()
      setRecipe(data.meals[0])
    } catch (error) {
      console.log(error)
    }
  }

  const fetchUserCategory = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}filter.php?c=${user?.category}`)
      const data = await response.json()
      setRecipe(data.meals[Math.floor(Math.random() * data.meals.length)])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!user?.category) {
      fetchRandomMeal()
    } else {
      fetchUserCategory()
    }
  }, [user?.category])

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <div className="">
        <h1 className="text-4xl text-center">Welcome to my recipe website!</h1>
      </div>
      {recipe && <RecipeCard idMeal={recipe.idMeal} strMeal={recipe.strMeal} strMealThumb={recipe.strMealThumb} />}
      <h3>Try this one out!</h3>
    </div>
  )
}
