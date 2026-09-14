"use client"

import { useUserContext } from "@/context/context"
import { userContextType } from "@/types/types"
import { ReactNode, useMemo } from "react"
import Login from "."
import Nav from "../Nav"

const LoginWrapper = ({children}: {children:ReactNode}) => {
  const {user} = useUserContext() as userContextType

  const isLoggedIn = useMemo(()=> {
    return !!user
  }, [user ? user.username : null])

  return (
    <>
    {isLoggedIn ? 
    <>
    <Nav />
    {children}
    </> : 
    <Login />}
    </>
  )
}

export default LoginWrapper