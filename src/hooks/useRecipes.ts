import { useContext } from "haunted";
import { RecipesContext } from "../components/recipes-provider.ts";

export const useRecipes = () => {
  const context = useContext(RecipesContext);
  if (!context) {
    throw new Error("Context error");
  }
  return context;
};
