import "./style.css";
import { html, component } from "haunted";
import "./components/inner-app.ts";

function App() {
  return html`<inner-app></inner-app> `;
}

customElements.define("my-app", component(App));
