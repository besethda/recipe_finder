import Link from "next/link";
import Image from "next/image";
import { categoryType } from "@/types/types";
import FavoriteButton from "./favoriteButton";

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
      <div className="flex justify-evenly flex-wrap px-6">
      {categories! && categories.map((category:categoryType, index)=> {
        return (
          <Link className="w-1/3 p-4" key={category.idCategory} href={`/category/${category.strCategory}`}>
          <div className="relative h-80 w-110">
            <Image src={category.strCategoryThumb} alt={category.strCategory} fill />
          </div>
          <div className="flex justify-between pb-3">
            <h3 className="text-2xl">{category.strCategory}</h3>
            <FavoriteButton category={category.strCategory} />
          </div>
          <p className="">{category.strCategoryDescription}</p>
          </Link>
        )
     })}
      </div>
    </>

  )
}

export default Categories