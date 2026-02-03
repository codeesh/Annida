import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import "./index.css"; // optional
import "./app.css";

console.log("[debug] main.jsx loaded");

const rootEl = document.getElementById("root");
try {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} catch (err) {
  console.error("[error] render failed", err);
}
