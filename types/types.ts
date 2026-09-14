export type recipeType = {
  idMeal: string //recipe id
  strMeal: string //recipe name
  strMealThumb: string //recipe image
}

export type fullRecipeType = {
  idMeal: string //recipe id
  strMeal: string //recipe name
  strMealThumb: string //recipe image
  ingredients: string[],
  strInstructions: string,
  strCountry: string
}

export type userType = {
  name: string
  username: string
  password: string
  category: string | null
  recipes: recipeType[],
}

export type categoryType = {
  strCategory: string
  idCategory: string
  strCategoryThumb: string
  strCategoryDescription: string
}

export type userContextType = {
  user: userType|null,
  setUser: (user:userType) => void
} 