import { component, createContext, html, useEffect, useState } from "haunted";
import type { Recipe, RecipesContextType } from "../utils/types";
import { parseRecipes } from "../utils/utils";

export const RecipesContext = createContext<RecipesContextType | null>(null);

customElements.define("recipes-provider", RecipesContext.Provider);
customElements.define("recipes-consumer", RecipesContext.Consumer);

const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php";

export const RecipesWrapper = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState<string>();

  const searchRecipes = (searchTerm: string) => {
    setQuery(searchTerm);
  };

  const getRecipes = async (signal: AbortSignal) => {
    setLoading(true);
    setError(null);

    let url = API_URL;
    if (query) {
      url += `?s=${query}`;
    } else {
      url += `?f=a`;
    }

    try {
      const res = await fetch(url, { signal });

      if (!res.ok) {
        const errorBody = await res.json();
        throw new Error(
          `${res.status} error: ${errorBody.message || "No error message"}`,
        );
      }

      const data = await res.json();

      const parsedRecipes = parseRecipes(data);
      setRecipes(parsedRecipes);
    } catch (error: any) {
      if (error.name === "AbortError") {
        return;
      }

      console.error(`Failed to get recipes: ${JSON.stringify(error)}`);
      setError("Failed to get recipes");
    } finally {
      if (!signal.aborted) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    getRecipes(controller.signal);

    return () => {
      controller.abort();
    };
  }, [query]);

  const providerValue: RecipesContextType = {
    recipes,
    error,
    loading,
    searchRecipes,
    query,
  };

  return html`<recipes-provider .value=${providerValue}
    ><slot></slot
  ></recipes-provider>`;
};

customElements.define("recipes-wrapper", component(RecipesWrapper));
