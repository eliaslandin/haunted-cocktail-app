import "./style.css";
import { html, component } from "haunted";

function App() {
  return html` <main>
    <h2>App</h2>
  </main>`;
}

customElements.define("my-app", component(App));
