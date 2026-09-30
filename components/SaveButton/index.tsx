'use client'
import { recipeType, userContextType } from "@/types/types"
import { useUserContext } from "@/context/context"
import { useState } from "react"

const SaveRecipe = ({idMeal, strMeal, strMealThumb}: recipeType) => {
  const {user, setUser} = useUserContext() as userContextType
  const [saveButtonText, setSaveButtonText] = useState<string>('+')
  
  const handleClick = (e:React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const recipeToSave = {idMeal, strMeal, strMealThumb}
    if (user) {setUser({...user, recipes:[...user.recipes, recipeToSave]})}
    setSaveButtonText('✓')
    setTimeout(()=> {
      setSaveButtonText('+')
    }, 2000
    )
  }

  return (
    <>
      {user && <button onClick={handleClick} className="absolute top-4 bg-mauve-600/50 shadow-mauve-600/50 shadow-2xl rounded-bl-2xl  text-white text-3xl right-4 backdrop-blur-xs pb-2 px-4 hover:text-primary cursor-pointer">{saveButtonText}</button>}
    </>
    )
  }

export default SaveRecipe