import RecipeCard from "@/components/RecipeCard";
import { recipeType } from "@/types/types";

const Category = async ({params}: {params: Promise<{ id: string }>}) => {
  const { id } = await params
  let recipes
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}filter.php?c=${id}`)
    const data = await response.json();
    recipes = await data.meals
  } catch (error) {
    console.log(error)
  }
  
  return (
    <>
      <div className="flex flex-wrap px-4">
        {recipes && recipes.map((e:recipeType, i:number)=> <RecipeCard key={e.idMeal} {...e}/>)}
      </div>
    </>
  )
}

export default Category