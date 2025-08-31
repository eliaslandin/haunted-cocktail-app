import { component, html } from "haunted";
import { useToast } from "../hooks/useToast";
import { useRecipes } from "../hooks/useRecipes";

export const SearchBar = (element: HTMLElement) => {
  const { searchRecipes, query } = useRecipes();
  const toast = useToast(element);

  const handleSearch = (e: SubmitEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const searchTerm = formData.get("query") as string;

    if (searchTerm === query) {
      return;
    }

    if (!searchTerm) {
      searchRecipes("");
      return;
    }

    toast.info("Searching...");
    searchRecipes(searchTerm);
  };

  return html`
    <form @submit=${handleSearch} autocomplete="off">
      <input name="query" type="search" placeholder="Search cocktail..." />
      <button>Search</button>
    </form>

    <style>
      form {
        display: flex;
        padding: 16px;
        gap: 16px;
      }

      input {
        background: white;
        border-radius: 9999px;
        color: var(--secondary);
        padding: 10px 26px;
        border: none;
        width: 100%;
        font-size: 1.125rem;
        box-shadow: var(--shadow);
      }

      input::placeholder {
        color: var(--muted);
      }

      input:focus {
        outline-color: var(--primary);
      }

      button {
        border: none;
        background: var(--primary);
        color: white;
        border-radius: 9999px;
        padding: 10px 28px;
        font-size: 1.125rem;
        cursor: pointer;
      }

      button:hover {
        background: var(--primary-dark);
      }

      button:disabled {
        background: var(--muted);
        cursor: default;
      }
    </style>
  `;
};

customElements.define("search-bar", component(SearchBar));
