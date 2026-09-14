import Link from "next/link";
import Image from "next/image";
import { categoryType } from "@/types/types";

const Categories = async () => {

  let categories: categoryType[]
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}categories.php`)
    const data = await response.json();
    categories = await data.categories
  } catch(error) {
    console.log(error)
  }
  return (
    <>
      <h2>Categories page</h2>
      {categories! && categories.map((category:categoryType, index)=> {
      return (
        <Link key={category.idCategory} href={`/category/${category.strCategory}`}>
        <div className="relative h-80 w-110">
          <Image src={category.strCategoryThumb} alt={category.strCategory} fill />
        </div>
        <h3 className="">{category.strCategory}</h3>
        <p>{category.strCategoryDescription}</p>
        </Link>
      )
    })}
    </>

  )
}

export default Categories