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
      <div className="flex justify-evenly pt-8 flex-wrap px-6">
      {categories! && categories.map((category:categoryType, index)=> {
        return (
          <Link className="min-w-86 w-1/3 max-w-180 p-4 relative hover:brightness-105 duration-150" key={category.idCategory} href={`/category/${category.strCategory}`}>
            <div className="relative hover:-translate-y-0.5 duration-150 w-full aspect-9/6 bg-ternary mb-3">
              <div className="absolute top-1 right-1 w-30 z-30">
                <FavoriteButton category={category.strCategory} />
              </div>
              <Image className="object-cover" src={category.strCategoryThumb} alt={category.strCategory} fill />
              <div className="flex absolute z-10 top-0 items-center justify-center h-full w-full">
                <h3 className="w-fit h-fit backdrop-blur-xs mb-8 bg-mauve-600/30 shadow-xl px-3 py-1 text-white text-center text-4xl">{category.strCategory}</h3>
              </div>
            </div>
            <p>{category.strCategoryDescription}</p>
          </Link>
        )
     })}
      </div>
    </>

  )
}

export default Categories