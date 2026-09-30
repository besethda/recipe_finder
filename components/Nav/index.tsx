import Link from "next/link"

const Nav = () => {
  return (
    <nav className="flex w-full bg-ternary z-35 py-2 text-2xl justify-center sticky top-0 shadow-xl">
      <Link className="mx-1 border-black border px-4 py-2 rounded-2xl hover:bg-primary duration-100 hover:-translate-y-0.5 active:brightness-90" href="/">Home</Link>
      <Link className="mx-1 border-black border px-4 py-2 rounded-2xl hover:bg-primary duration-100 hover:-translate-y-0.5 active:brightness-90" href="/categories">Categories</Link>
      <Link className="mx-1 border-black border px-4 py-2 rounded-2xl hover:bg-primary duration-100 hover:-translate-y-0.5 active:brightness-90" href="/profile">Profile</Link>
    </nav>
  )
}

export default Nav