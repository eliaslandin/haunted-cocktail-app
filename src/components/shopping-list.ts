import { component, html } from "haunted";
import { useShoppingList } from "../hooks/useShoppingList";
import { useToast } from "../hooks/useToast";
import type { Recipe } from "../utils/types";
import { usePrint } from "../hooks/usePrint";

export const ShoppingList = (element: HTMLElement) => {
  const { addedRecipes, addedIngredients, removeFromShoppingList } =
    useShoppingList();
  const toast = useToast(element);
  const print = usePrint();

  const handleRemove = (recipe: Recipe) => {
    removeFromShoppingList(recipe.id);
    toast.success(`Removed ${recipe.name} from shopping list`);
  };

  const handlePrint = () => {
    const ingredientsEl = element.shadowRoot!.querySelector("#ingredients")!;
    print(ingredientsEl);
  };

  return html`
    <div class="container">
      <h2>Shopping List</h2>

      <div class="scroll-container">
        <div>
          <h3>Cocktails</h3>
          <ul>
            ${addedRecipes.length === 0
              ? html`<li>Empty</li>`
              : addedRecipes.map(
                  (recipe) => html`
                    <li>
                      ${recipe.name}
                      <button
                        class="remove-btn"
                        @click=${() => handleRemove(recipe)}
                      >
                        <icon-component
                          class="icon"
                          .type=${"x"}
                        ></icon-component>
                      </button>
                    </li>
                  `,
                )}
          </ul>
        </div>
        <div id="ingredients">
          <h3>Ingredients</h3>
          <ul>
            ${addedIngredients.length === 0
              ? html`<li>Empty</li>`
              : addedIngredients.map(
                  (ingredient) => html` <li>${ingredient}</li> `,
                )}
          </ul>
        </div>
      </div>
      <button
        class="print-btn"
        @click=${handlePrint}
        ?disabled=${addedIngredients.length === 0}
      >
        Print Ingredients
      </button>
    </div>

    <style>
      :host {
        width: 100%;
        max-width: 256px;
        position: relative;
      }

      .container {
        position: sticky;
        top: 26px;
        right: 0;
        background: white;
        box-shadow: var(--shadow);
        border-radius: var(--radius-sm);
        display: flex;
        flex-direction: column;
        gap: 26px;
        padding: 26px;
      }

      .scroll-container {
        display: flex;
        flex-direction: column;
        gap: 26px;
        overflow-y: auto;
        max-height: calc(100vh - 200px);
      }

      h2 {
        font-size: var(--text-lg);
        font-weight: normal;
        line-height: 1;
        color: var(--secondary);
        margin: 0;
        text-align: center;
      }

      h3 {
        font-size: var(--text-base);
        font-weight: normal;
        line-height: 1;
        color: var(--primary);
        margin: 0;
      }

      ul {
        margin: 0;
        margin-top: 10px;
        padding: 0;
        list-style: none;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      li {
        margin: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        color: var(--secondary);
        font-size: var(--text-base);
      }

      .remove-btn {
        margin: 0;
        padding: 0;
        background: transparent;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        cursor: pointer;
      }

      button:hover {
        background: #f5f5f9;
      }

      .icon {
        width: 18px;
        height: 18px;
        color: var(--muted);
      }

      .print-btn {
        border: 1px solid var(--primary);
        outline: none;
        color: var(--primary);
        background: transparent;
        border-radius: 9999px;
        padding: 8px;
        width: 100%;
        font-size: 1rem;
        cursor: pointer;
      }

      .print-btn:hover {
        border-color: var(--primary-dark);
        background: var(--background);
      }

      .print-btn:disabled {
        border-color: var(--border);
        color: var(--border);
        cursor: default;
      }

      @media screen and (max-width: 900px) {
        :host {
          max-width: 100%;
        }
      }
    </style>
  `;
};

customElements.define("shopping-list", component(ShoppingList));
