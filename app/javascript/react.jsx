import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const container = document.getElementById("authors-grid");
const authors = JSON.parse(
  container.dataset.authors
);

const root = createRoot(container);
root.render(<App authors={authors} />);
