"use client"
import { SetStateAction, useState } from "react"
import { users } from "@/data/users"
import { useUserContext } from "@/context/context"
import { userContextType } from "@/types/types"

const Login = () => {

  const {user, setUser} = useUserContext() as userContextType
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

  return (
    <div className="h-full">
      <div className="border border-indigo-200 p-4 w-75 my-6 m-auto flex flex-col">
        <label htmlFor="username" className="mb-2">Username:</label>
        <input onChange={changeUsername} id="username" type="text" value={username} className="border border-indigo-200"></input>
        <label htmlFor="password" className="my-3">Password:</label>
        <input onChange={changePassword} id="password" type="password" value={password} className="border border-indigo-200"></input>
        <button onClick={handleLogin} className="px-4 py-2 border mt-5 hover:cursor-pointer hover:bg-indigo-300 duration-250 active:brightness-75 border-indigo-200">Log In</button>
      </div>
    </div>

  )
}

export default Login