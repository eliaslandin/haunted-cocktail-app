import { useRecipes } from "../hooks/useRecipes";
import { html, component, useEffect } from "haunted";
import { useToast } from "../hooks/useToast";

export const InnerApp = (element: HTMLElement) => {
  const { recipes } = useRecipes();
  const { toast } = useToast(element);

  useEffect(() => {
    toast.success("Testing");

    setTimeout(() => {
      toast.error("Testing2");
    }, 2000);
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
