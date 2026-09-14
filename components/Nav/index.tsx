import Link from "next/link"

const Nav = () => {
  return (
    <nav className="flex w-full justify-center">
      <Link className="mx-3" href="/">Home</Link>
      <Link className="mx-3" href="/categories">Categories</Link>
      <Link className="mx-3" href="/profile">Profile</Link>
    </nav>
  )
}

export default Nav