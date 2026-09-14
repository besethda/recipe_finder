import { recipeType, userType } from "@/types/types"
import Image from "next/image"
import Link from "next/link"
import { userContextType } from "@/types/types"
import { useUserContext } from "@/context/context"

const RecipeCard = ({idMeal, strMeal, strMealThumb}: recipeType) => {
    const { user, setUser } = useUserContext() as userContextType
  
  return (
    <Link key={idMeal} href={`/recipes/${idMeal}`}>
      <div className="relative h-80 w-110">
        <Image src={strMealThumb} alt={idMeal} fill />
      </div>
      <h2>{strMeal}</h2>
      <div>Add to likes</div>
    </Link>
  )
}

export default RecipeCard