import "./style.css";
import { html, component } from "haunted";
import "./components/inner-app.ts";
import "./components/toast-provider.ts";
import type { ToastContextType } from "./utils/types.ts";

function App() {
  return html`
    <toast-wrapper>
      <toast-consumer
        .render=${(c: ToastContextType) => {
          // Make sure context is available before rendering inner app
          if (c) {
            return html`<inner-app></inner-app>`;
          }
        }}
      ></toast-consumer>
    </toast-wrapper>
  `;
}

customElements.define("my-app", component(App));
