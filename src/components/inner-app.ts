import { useRecipes } from "../hooks/useRecipes";
import { html, component, useEffect } from "haunted";
import "./recipe-card.ts";
import "./search-bar.ts";
import "./shopping-list.ts";
import "./recipe-list.ts";
import { useToast } from "../hooks/useToast.ts";

export const InnerApp = (element: HTMLElement) => {
  const { recipes, query } = useRecipes();
  const toast = useToast(element);

  useEffect(() => {
    if (recipes.length === 0 && query) {
      toast.error("No results found");
    }

    if (recipes.length > 0 && query) {
      toast.success("Here are the results");
    }
  }, [recipes]);

  return html`
    <main>
      <div class="column">
        <header>
          <h1>haunted</h1>
          <icon-component class="icon" .type=${"ghost"}></icon-component>
          <h1>cocktails</h1>
        </header>
        <div class="flex-container">
          <div>
            <search-bar></search-bar>
            <recipe-list .recipes=${recipes}></recipe-list>
          </div>
          <shopping-list></shopping-list>
        </div>
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
      }

      header {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
        margin: 16px 0;
        opacity: 0.2;
      }

      header h1 {
        font-size: var(--text-lg);
        color: var(--primary);
        font-weight: normal;
        line-height: 1;
        margin: 0;
      }

      .flex-container {
        display: flex;
        gap: 34px;
      }

      .flex-container > div {
        flex: 1;
      }

      @media screen and (max-width: 900px) {
        .flex-container {
          flex-direction: column;
        }
      }
    </style>
  `;
};

customElements.define("inner-app", component(InnerApp));
