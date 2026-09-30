'use client'
import { recipeType, userContextType } from "@/types/types"
import { useUserContext } from "@/context/context"
import { useState } from "react"

const SaveRecipe = ({idMeal, strMeal, strMealThumb}: recipeType) => {
  const {user, setUser} = useUserContext() as userContextType
  const [saveButtonText, setSaveButtonText] = useState<string>('Save Recipe')
  
  const handleClick = (e:React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const recipeToSave = {idMeal, strMeal, strMealThumb}
    if (user) {setUser({...user, recipes:[...user.recipes, recipeToSave]})}
    setSaveButtonText('Saved')
    setTimeout(()=> {
      setSaveButtonText('Save Recipe')
    }, 2000
    )
  }


  return (
    <>
      <button onClick={handleClick} className=" bg-amber-900 text-white m-4">{saveButtonText}</button>
    </>
    )
  }

export default SaveRecipe