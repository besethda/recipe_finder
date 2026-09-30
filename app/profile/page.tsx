"use client"

import { useUserContext } from "@/context/context"
import { recipeType, userContextType } from "@/types/types"
import Link from "next/link"

const Profile = () => {
  const {user, setUser} = useUserContext() as userContextType
  
  return (
    <div className="">
      <h2>Profile page</h2>
      <p>Your favorite type of food is {user?.category}</p>
      {user?.recipes.length ? <h2 className="text-2xl">Your favorite recipes:</h2> : null}
      <div className="flex flex-col">
        {user?.recipes.length ? 
        user?.recipes.map((e:recipeType, i:number)=> 
          <Link className="block w-fit" key={i} href={`/recipes/${e.idMeal}`}>{e.strMeal}</Link>
        ): null}
      </div>
    </div>
  )
}

export default Profile