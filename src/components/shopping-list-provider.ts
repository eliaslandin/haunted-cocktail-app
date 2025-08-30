import { component, createContext, html, useMemo, useState } from "haunted";
import type { Recipe, ShoppingListContextType } from "../utils/types";
import { getUniqueIngredients } from "../utils/utils";

export const ShoppingListContext =
  createContext<ShoppingListContextType | null>(null);

customElements.define("shopping-list-provider", ShoppingListContext.Provider);
customElements.define("shopping-list-consumer", ShoppingListContext.Consumer);

export const ShoppingListWrapper = () => {
  const [addedRecipes, setAddedRecipes] = useState<Recipe[]>([]);

  const removeFromShoppingList = (id: string) => {
    setAddedRecipes((prev) => prev.filter((r) => r.id !== id));
  };

  const addToShoppingList = (recipe: Recipe) => {
    setAddedRecipes((prev) => [...prev, recipe]);
  };

  const addedIngredients: string[] = useMemo(() => {
    return getUniqueIngredients(addedRecipes);
  }, [addedRecipes]);

  const providerValue: ShoppingListContextType = {
    addToShoppingList,
    removeFromShoppingList,
    addedRecipes,
    addedIngredients,
  };

  return html`
    <shopping-list-provider .value=${providerValue}>
      <slot></slot
    ></shopping-list-provider>
  `;
};

customElements.define("shopping-list-wrapper", component(ShoppingListWrapper));
