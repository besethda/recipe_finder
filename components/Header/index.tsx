"use client"

import { useUserContext } from "@/context/context"
import { userContextType } from "@/types/types"

const Header = () => {
  const {user, setUser} = useUserContext() as userContextType
  return (
    <header className="bg-red flex justify-center py-3 items-center flex-col py-3">
      <h1 className="text-3xl">Seths Restaurant</h1>
      {user && <h2 className="">Hello, {user.name}</h2>}
    </header>
  )
}

export default Header