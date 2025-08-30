import "./style.css";
import { html, component } from "haunted";
import "./components/inner-app.ts";
import "./components/shopping-list-provider.ts";
import type { ShoppingListContextType } from "./utils/types.ts";

function App() {
  return html`
    <shopping-list-wrapper>
      <shopping-list-consumer
        .render=${(c: ShoppingListContextType) => {
          // Make sure context is available before rendering inner app
          if (c) {
            return html`<inner-app></inner-app>`;
          }
        }}
      ></shopping-list-consumer>
    </shopping-list-wrapper>
  `;
}

customElements.define("my-app", component(App));
