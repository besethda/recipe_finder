"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import SaveRecipe from "@/components/SaveButton"
import { fullRecipeType } from "@/types/types"

const Recipe = () => {
  const { id } = useParams<{ id: string }>()
  const [recipe, setRecipe] = useState<fullRecipeType | null>(null)

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}lookup.php?i=${id}`)
        const data = await response.json();
        const meal: fullRecipeType = data.meals[0]

        if (meal) {
          const keys = Object.keys(meal).filter(key => key.includes("strIngredient"))
          const keysWithValue = keys.filter((key: string) => meal[key as keyof fullRecipeType] !== "" && meal[key as keyof fullRecipeType] !== null)
          const ingredients = keysWithValue.map((key, index) => `${meal[key as keyof fullRecipeType]} - ${meal[`strMeasure${index + 1}` as keyof fullRecipeType]}`)
          meal.ingredients = ingredients
        }

        setRecipe(meal)
      } catch (error) {
        console.log(error)
      }
    }

    fetchRecipe()
  }, [id])

  return (
  <>
      {recipe && <div className="flex flex-col items-center pt-8">
        <div className="relative h-80 max-w-120 min-w-90">
          <Image src={recipe.strMealThumb} alt={recipe.idMeal} fill />
          <div className="w-full h-full flex items-center justify-center absolute top-0">
            <h2 className="text-center text-4xl bg-mauve-600/40 backdrop-blur-xs text-white px-3 py-1">{recipe.strMeal}</h2>
          </div>
          <p className="absolute bottom-0 left-0 p-1 bg-mauve-600/40 backdrop-blur-xs text-white">Country: {recipe.strCountry}</p>
        </div>
        <h2 className="text-2xl my-3">Ingredients:</h2>
        <div className="grid grid-cols-2 border-y border-primary p-2 ">
          {recipe.ingredients.map((e, i)=><div key={i} className="px-3">{e}</div>)}
        </div>
        <div className="px-6 max-w-130 my-5">{recipe.strInstructions}</div>
        <SaveRecipe {...recipe}/>
    </div>}
  </>
  )
}

export default Recipe
