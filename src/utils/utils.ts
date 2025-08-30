import type { TheCocktailDbResponse, Recipe } from "./types";

export const parseRecipes = (data: TheCocktailDbResponse): Recipe[] => {
  // Return empty array if no drinks were found
  if (typeof data.drinks === "string" || typeof data.drinks === "undefined") {
    return [];
  }

  // Parse the data
  const parsedRecipes: Recipe[] = data.drinks.map((drinkData) => {
    // Convert ingredients into an array
    let ingredients: string[] = [];
    for (const [key, value] of Object.entries(drinkData)) {
      if (
        typeof value === "string" &&
        value.length > 0 &&
        /^strIngredient/.test(key)
      ) {
        ingredients.push(value);
      }
    }

    return {
      id: drinkData.idDrink,
      name: drinkData.strDrink,
      thumbnail: drinkData.strDrinkThumb,
      instructions: drinkData.strInstructions,
      ingredients,
    };
  });

  return parsedRecipes;
};

export const getUniqueIngredients = (recipes: Recipe[]): string[] => {
  let uniqueIngredients: string[] = [];

  for (const recipe of recipes) {
    for (const ingredient of recipe.ingredients) {
      if (!uniqueIngredients.includes(ingredient)) {
        uniqueIngredients.push(ingredient);
      }
    }
  }

  return uniqueIngredients;
};
