import Image from "next/image"
import SaveRecipe from "@/components/SaveButton"
import { fullRecipeType } from "@/types/types"

const Recipe = async ({params}: {params: Promise<{ id: string }>}) => {
  const { id } = await params
  let recipe: fullRecipeType

  try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}lookup.php?i=${id}`)
      const data = await response.json();
      recipe = data.meals[0]

      if(recipe) {
        const keys = Object.keys(recipe!). filter(key => key.includes("strIngredient"))
        const keysWithValue = keys.filter((key: string) => recipe[key as keyof fullRecipeType] !== "" && recipe[key as keyof fullRecipeType] !== null)
        const ingredients = keysWithValue.map((key, index) => `${recipe[key as keyof fullRecipeType]} - ${recipe[`strMeasure${index + 1}` as keyof fullRecipeType]}` )
        recipe.ingredients = ingredients
      }
    } catch(error) {
      console.log(error)
    }

  return (
  <>
      {recipe! && <div className="">
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

