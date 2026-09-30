"use client"

import { useUserContext } from "@/context/context"
import { userContextType } from "@/types/types"

const Header = () => {
  const {user, setUser} = useUserContext() as userContextType
  return (
    <header className="bg-secondary flex py-5 z-10 justify-center text-white shadow-xl flex-col px-4">
      <h1 className="text-3xl">Seths Restaurant</h1>
      {user && <h2 className="">Hello, {user.name}</h2>}
    </header>
  )
}

export default Header