"use client"
import { SetStateAction, useEffect, useState } from "react"
import { users } from "@/data/users"
import { useUserContext } from "@/context/context"
import { userContextType } from "@/types/types"
import RecipeCard from "../RecipeCard"

const Login = () => {

  const {user, setUser} = useUserContext() as userContextType
  const [recipe, setRecipe] = useState<any>(null)
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")


  const changeUsername = (e: { target: { value: SetStateAction<string> } }) => {
    setUsername(e.target.value)
  }

  const changePassword = (e: { target: { value: SetStateAction<string> } }) => {
    setPassword(e.target.value)
  }

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const loggedInUser = users.find(e => e.username === username && e.password === password)
    if(loggedInUser) setUser(loggedInUser)
  }

  const fetchRandomMeal = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}random.php`)
      const data = await response.json()
      setRecipe(data.meals[0])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
     setRecipe(fetchRandomMeal())
    }, [])

  return (
    <div className="h-full">
      <h1 className="mt-10 text-3xl text-center">Try something new!</h1>
      <div className="mt-4 flex justify-center">
        {recipe && <RecipeCard idMeal={recipe.idMeal} strMeal={recipe.strMeal} strMealThumb={recipe.strMealThumb} />}
      </div>
      <div className="border-2 border-ternary p-4 w-75 my-6 m-auto flex flex-col">
        <label htmlFor="username" className="mb-2">Username:</label>
        <input onChange={changeUsername} id="username" type="text" value={username} className="border outline-none border-secondary p-1"></input>
        <label htmlFor="password" className="my-3">Password:</label>
        <input onChange={changePassword} id="password" type="password" value={password} className="border outline-none border-secondary p-1"></input>
        <button onClick={handleLogin} className="px-4 py-2 border mt-5 hover:cursor-pointer hover:bg-indigo-300 duration-250 active:brightness-75 outline-none border-secondary p-1">Log In</button>
      </div>
    </div>

  )
}

export default Login