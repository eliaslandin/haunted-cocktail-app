import "./style.css";
import { html, component } from "haunted";
import "./components/inner-app.ts";
import "./components/toast-wrapper.ts";
import "./components/icon-component.ts";
import type {
  RecipesContextType,
  ShoppingListContextType,
} from "./utils/types.ts";

function App() {
  return html`
    <toast-wrapper>
      <shopping-list-wrapper>
        <shopping-list-consumer
          .render=${(c: ShoppingListContextType) => {
            // Make sure haunted doesn't render children before populating contexts
            if (c) {
              return html`
                <recipes-wrapper>
                  <recipes-consumer
                    .render=${(c: RecipesContextType) => {
                      // Make sure haunted doesn't render children before populating contexts
                      if (c) {
                        return html`<inner-app></inner-app>`;
                      }
                    }}
                  ></recipes-consumer>
                </recipes-wrapper>
              `;
            }
          }}
        ></shopping-list-consumer>
      </shopping-list-wrapper>
    </toast-wrapper>
  `;
}

customElements.define("my-app", component(App));
