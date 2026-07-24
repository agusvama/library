import React from "react";
import { createRoot } from "react-dom/client";
import AuthorsGrid from "./components/AuthorsGrid";

const container = document.getElementById("authors-grid");
const authors = JSON.parse(
  container.dataset.authors
);

const root = createRoot(container);
root.render(<AuthorsGrid authors={authors} />);
