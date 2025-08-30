import { useContext } from "haunted";
import { ShoppingListContext } from "../components/shopping-list-provider.ts";

export const useShoppingList = () => {
  const context = useContext(ShoppingListContext);
  if (!context) {
    throw new Error("Context error");
  }
  return context;
};
