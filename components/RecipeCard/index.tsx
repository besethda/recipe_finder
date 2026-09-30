import { recipeType, userType } from "@/types/types"
import Image from "next/image"
import Link from "next/link"
import SaveRecipe from "../SaveButton"

const RecipeCard = ({idMeal, strMeal, strMealThumb}: recipeType) => {  
  return (
    <Link className="p-4 flex justify-center w-1/4 flex-col" key={idMeal} href={`/recipes/${idMeal}`}>
      <div className="relative w-full aspect-video">
        <Image className="object-cover" src={strMealThumb} alt={idMeal} fill />
      </div>
      <h2>{strMeal}</h2>
      <SaveRecipe idMeal={idMeal} strMeal={strMeal} strMealThumb={strMealThumb}/>
    </Link>
  )
}

export default RecipeCard