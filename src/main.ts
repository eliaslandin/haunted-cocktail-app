import "./style.css";
import { html, component } from "haunted";
import "./components/inner-app.ts";
import "./components/shopping-list-provider.ts";
import "./components/toast-wrapper.ts";
import "./components/icon-component.ts";
import type { ShoppingListContextType } from "./utils/types.ts";

function App() {
  return html`
    <toast-wrapper>
      <shopping-list-wrapper>
        <shopping-list-consumer
          .render=${(c: ShoppingListContextType) => {
            // Make sure context is available before rendering inner app
            if (c) {
              return html`
                <recipes-wrapper>
                  <recipes-consumer
                    .render=${(c: ShoppingListContextType) => {
                      // Make sure context is available before rendering inner app
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
