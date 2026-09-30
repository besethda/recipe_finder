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
      {recipe && <div className="">
        <div className="relative h-80 w-100">
          <Image src={recipe.strMealThumb} alt={recipe.idMeal} fill />
        </div>
        <p>{recipe.strCountry}</p>
        <h2 className="">{recipe.strMeal}</h2>
        <div className="">
          {recipe.ingredients.map((e, i)=><div key={i} className="">{e}</div>)}
        </div>
        <div className="">{recipe.strInstructions}</div>
        <SaveRecipe {...recipe}/>
    </div>}
  </>
  )
}

export default Recipe
