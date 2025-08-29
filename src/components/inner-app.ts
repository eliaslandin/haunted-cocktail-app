import { useRecipes } from "../hooks/useRecipes";
import { html, component, useEffect } from "haunted";
import { useToast } from "../hooks/useToast";

export const InnerApp = () => {
  const { recipes } = useRecipes();
  const { toast } = useToast();

  useEffect(() => {
    toast.success("Testing");
  }, []);

  return html`
    <main>
      <h2>App</h2>
      ${recipes.map(
        (recipe) => html` <p>${recipe.ingredients.join(", ")}</p> `,
      )}
    </main>
  `;
};

customElements.define("inner-app", component(InnerApp));
