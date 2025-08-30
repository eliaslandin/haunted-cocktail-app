export type Recipe = {
  id: string;
  name: string;
  thumbnail: string;
  instructions: string;
  ingredients: string[];
};

export type RecipesContextType = {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
  query?: string;
  searchRecipes: (searchTerm: string) => void;
};

export type TheCocktailDbResponse = {
  drinks: any[] | string | undefined;
};

export type ToastNotificationType = "success" | "error" | "info";

export type ToastNotification = {
  id: string;
  message: string;
  type: ToastNotificationType;
};

export type Toast = {
  success: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
};

export type ToastEventPayload = {
  message: string;
  type: ToastNotificationType;
};

export type ToastEvent = CustomEvent<ToastEventPayload>;

export type ShoppingListContextType = {
  addToShoppingList: (recipe: Recipe) => void;
  removeFromShoppingList: (id: string) => void;
  addedRecipes: Recipe[];
  addedIngredients: string[];
};
