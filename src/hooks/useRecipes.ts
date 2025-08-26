import { useEffect, useState } from "haunted";

const apiRoot = "https://www.thecocktaildb.com/api/json/v1/1/search.php";

type Recipe = {
  strDrink: string;
};

export const useRecipes = (query?: string) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getRecipes = async () => {
    setLoading(true);
    setError(null);

    let url = apiRoot;
    if (query) {
      url += `?s=${query}`;
    } else {
      url += `?f=a`;
    }

    try {
      const res = await fetch(url);

      if (!res.ok) {
        const errorBody = await res.json();
        throw new Error(
          `${res.status} error: ${errorBody.message || "No error message"}`,
        );
      }

      const data = await res.json();
      console.log(data);
      setRecipes(typeof data.drinks === "object" ? data.drinks : []);
    } catch (error) {
      console.error(`Failed to get recipes: ${JSON.stringify(error)}`);
      setError("Failed to get recipes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  return {
    recipes,
    error,
    loading,
  };
};
