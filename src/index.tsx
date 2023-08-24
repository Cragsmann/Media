import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";

const el: HTMLElement | null = document.getElementById("root");
if (el) {
  const root = createRoot(el);

  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error("Element with id 'root' doesn't exist in the document.");
}
