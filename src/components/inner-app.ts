import { useRecipes } from "../hooks/useRecipes";
import { html, component, useState } from "haunted";
import "./recipe-card.ts";
import "./search-bar.ts";

export const InnerApp = () => {
  const [searchTerm, setSearchTerm] = useState<string>();
  const { recipes } = useRecipes(searchTerm);

  return html`
    <main>
      <div class="column">
        <search-bar .setSearchTerm=${setSearchTerm}></search-bar>
        <ul>
          ${recipes.map(
            (recipe) =>
              html`<li>
                <recipe-card .recipe=${recipe}></recipe-card>
              </li> `,
          )}
        </ul>
      </div>
    </main>

    <style>
      main {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
      }

      .column {
        max-width: 1240px;
      }

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

customElements.define("inner-app", component(InnerApp));
