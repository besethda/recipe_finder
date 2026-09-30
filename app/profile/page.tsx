"use client"

import RecipeCard from "@/components/RecipeCard"
import { useUserContext } from "@/context/context"
import { recipeType, userContextType } from "@/types/types"
import Link from "next/link"

const Profile = () => {
  const {user, setUser} = useUserContext() as userContextType
  
  return (
    <div className="pt-8">
      <h1 className="text-5xl text-center">Welcome, {user?.name}</h1>
      <p className="py-3 text-2xl text-center">We think your favorite category is...{user?.category}!</p>
      {user?.recipes.length ? <h2 className="text-2xl pl-5">Your favorite recipes:</h2> : null}
      <div className="flex flex-wrap justify-center">
        {user?.recipes.length ? 
          user?.recipes.map((e:recipeType, i:number)=> <RecipeCard key={e.idMeal} {...e}/>
        ): <p className="text-center">You haven't saved any recipes... They'll show up here.</p>}
      </div>
    </div>
  )
}

export default Profile