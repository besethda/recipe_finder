"use client"

import { useUserContext } from "@/context/context"
import { userContextType } from "@/types/types"
import { useState } from "react"

const FavoriteButton = ({category}: {category: string}) => {
  const {user, setUser} = useUserContext() as userContextType
  const [saveButtonText, setSaveButtonText] = useState<string>('Save Category')
  
  const handleClick = (e:React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (user) {setUser({...user, category: category})}
    setSaveButtonText('Saved')
    setTimeout(()=> {
      setSaveButtonText('Save Category')
    }, 2000
    )
  }

  return(
    <button onClick={handleClick} className="absolute top-2 right-2 z-100">{saveButtonText}</button>
  )
}

export default FavoriteButton