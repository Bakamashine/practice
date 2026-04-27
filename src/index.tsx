import React, { FC } from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { Helmet, HelmetProvider } from "react-helmet-async";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
}

reportWebVitals();
