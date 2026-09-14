"use client"

import { userContextType, userType } from "@/types/types";
import { createContext, ReactNode, useContext, useState } from "react";


const UserContext = createContext<userContextType | null>(null)

export const UserProvider = ({children}:{children:ReactNode}) => {
  const [user, setUser] = useState<userType | null>(null)
  return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}

export const useUserContext = () => {
  return useContext(UserContext)
}