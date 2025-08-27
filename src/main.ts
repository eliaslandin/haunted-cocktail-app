import { useRecipes } from "./hooks/useRecipes";
import "./style.css";
import { html, component } from "haunted";

function App() {
  const { recipes } = useRecipes();

  return html` <main>
    <h2>App</h2>
    ${recipes.map((recipe) => html` <p>${recipe.ingredients.join(", ")}</p> `)}
  </main>`;
}

customElements.define("my-app", component(App));
