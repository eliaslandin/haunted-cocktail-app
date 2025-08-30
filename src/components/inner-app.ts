import { useRecipes } from "../hooks/useRecipes";
import { html, component, useState, useEffect } from "haunted";
import "./recipe-card.ts";
import "./search-bar.ts";
import "./shopping-list.ts";
import "./recipe-list.ts";
import { useToast } from "../hooks/useToast.ts";

export const InnerApp = (element: HTMLElement) => {
  const [searchTerm, setSearchTerm] = useState<string>();
  const { recipes } = useRecipes(searchTerm);
  const toast = useToast(element);

  useEffect(() => {
    if (recipes.length === 0 && searchTerm) {
      toast.error("No results found");
    }

    if (recipes.length > 0 && searchTerm) {
      toast.success("Here are the results");
    }
  }, [recipes]);

  return html`
    <main>
      <div class="column">
        <div>
          <search-bar .setSearchTerm=${setSearchTerm}></search-bar>
          <recipe-list .recipes=${recipes}></recipe-list>
        </div>
        <shopping-list></shopping-list>
      </div>
    </main>

    <style>
      main {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
      }

      .column {
        width: 100%;
        max-width: 1240px;
        display: flex;
        gap: 34px;
      }

      .column > div {
        flex: 1;
      }

      @media screen and (max-width: 900px) {
        .column {
          flex-direction: column;
        }
      }
    </style>
  `;
};

customElements.define("inner-app", component(InnerApp));
