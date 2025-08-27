import { useRecipes } from "../hooks/useRecipes";
import { html, component } from "haunted";

export const InnerApp = () => {
  const { recipes } = useRecipes();

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
