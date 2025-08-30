import { component, html } from "haunted";
import type { Recipe } from "../utils/types";
import { useShoppingList } from "../hooks/useShoppingList";
import { useToast } from "../hooks/useToast";

export const RecipeCard = (element: HTMLElement & { recipe: Recipe }) => {
  const { recipe } = element;
  const { addToShoppingList, addedRecipes } = useShoppingList();
  const toast = useToast(element);

  const handleClick = () => {
    if (!addedRecipes.includes(recipe)) {
      addToShoppingList(recipe);
      toast.success(`${recipe.name} added to shopping list`);
    }
  };

  return html`
    <div class="container">
      <div class="image-container">
        <img src=${recipe.thumbnail} />
      </div>
      <div class="info-container">
        <div class="header">
          <div class="title">
            <icon-component class="icon" .type=${"cocktail"}></icon-component>
            <h2>${recipe.name}</h2>
          </div>
          <button
            @click=${handleClick}
            ?disabled=${addedRecipes.includes(recipe)}
          >
            ${addedRecipes.includes(recipe) ? "Added" : "Buy"}
          </button>
        </div>
        <div class="divider"></div>
        <div class="desciption">
          <h3>Instructions</h3>
          <p>${recipe.instructions}</p>
        </div>
      </div>
    </div>

    <style>
      .container {
        display: flex;
        gap: 26px;
        border-radius: var(--radius-sm);
        background: white;
        padding: 16px;
        box-shadow: var(--shadow);
      }

      .image-container {
        width: 204px;
        height: 204px;
        border-radius: var(--radius-md);
        overflow: hidden;
      }

      .image-container img {
        width: 100%;
        height: 100%;
        max-height: 100%;
        max-width: 100%;
        object-fit: cover;
      }

      .info-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        flex: 1;
        flex-shrink: 0;
      }

      .header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
      }

      .title {
        display: flex;
        gap: 16px;
        align-items: center;
      }

      .divider {
        width: 100%;
        height: 1px;
        background: var(--border);
        border-radius: 9999px;
      }

      .description {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 10px;
      }

      p {
        margin: 0;
        line-height: 150%;
        font-size: 1.125rem;
        color: var(--muted);
      }

      h2 {
        margin: 0;
        font-size: 1.375rem;
        font-weight: normal;
        color: var(--secondary);
      }

      h3 {
        margin: 0;
        color: var(--primary);
        font-size: 1.125rem;
        font-weight: normal;
      }

      button {
        border: none;
        background: var(--primary);
        color: white;
        border-radius: 9999px;
        padding: 10px 28px;
        font-size: 1.125rem;
        cursor: pointer;
      }

      button:hover {
        background: var(--primary-dark);
      }

      button:disabled {
        background: var(--muted);
        cursor: default;
      }

      .icon {
        width: 24px;
        height: 24px;
      }

      @media screen and (max-width: 900px) {
        .container {
          flex-direction: column;
        }

        .image-container {
          width: 100%;
        }
      }
    </style>
  `;
};

customElements.define("recipe-card", component(RecipeCard));
