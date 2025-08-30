import { component, html } from "haunted";
import type { Recipe } from "../utils/types";
import { useRecipes } from "../hooks/useRecipes";

export const RecipeList = () => {
  const { recipes, error, loading } = useRecipes();
  let renderMessage;
  if (error) {
    renderMessage = error;
  } else if (loading) {
    renderMessage = "Loading...";
  } else if (recipes.length === 0) {
    renderMessage = "No recipes found";
  }

  if (renderMessage) {
    return html`<p>${renderMessage}</p>
      <style>
        p {
          text-align: center;
          font-size: var(--text-lg);
          color: var(--secondary);
        }
      </style>`;
  }

  return html`
    <ul>
      ${recipes.map(
        (recipe) =>
          html`<li>
            <recipe-card .recipe=${recipe}></recipe-card>
          </li> `,
      )}
    </ul>

    <style>
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    </style>
  `;
};

customElements.define("recipe-list", component(RecipeList));
