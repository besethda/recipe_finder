'use client'
import { recipeType, userContextType } from "@/types/types"
import { useUserContext } from "@/context/context"

const SaveRecipe = ({idMeal, strMeal, strMealThumb}: recipeType) => {
  const {user, setUser} = useUserContext() as userContextType
  
  const handleClick = () => {
    const recipeToSave = {idMeal, strMeal, strMealThumb}
    if (user) {setUser({...user, recipes:[...user.recipes, recipeToSave]})}
  }


  return (
    <>
      <button onClick={handleClick} className=" bg-amber-900 text-white m-4">Save Recipe for {strMeal}</button>
    </>
    )
  }

export default SaveRecipe