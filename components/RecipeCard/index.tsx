"use client"

import { recipeType, userContextType, userType } from "@/types/types"
import Image from "next/image"
import Link from "next/link"
import SaveRecipe from "../SaveButton"
import { useUserContext } from "@/context/context"


const RecipeCard = ({idMeal, strMeal, strMealThumb}: recipeType) => {  
    const {user, setUser} = useUserContext() as userContextType
  return (
    <Link className="p-4 hover:brightness-110 hover:-translate-y-1 min-w-90 duration-150 flex justify-center relative w-1/4 flex-col" key={idMeal} href={user ? `/recipes/${idMeal}` : ''}>
      <div className="relative w-full aspect-video">
        <Image className="object-cover" src={strMealThumb} alt={idMeal} fill />
      </div>
      <h2 className="absolute top-4 max-w-70 bg-mauve-600/40 shadow-mauve-600 shadow-2xl text-white text-xl left-4 backdrop-blur-xs py-2 px-4 rounded-br-2xl">{strMeal}</h2>
      {user && <SaveRecipe idMeal={idMeal} strMeal={strMeal} strMealThumb={strMealThumb}/>}
    </Link>
  )
}

export default RecipeCard