import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ThemeProvider } from "./context/ThemeProvider";
import { ErrorBoundary } from "./utility/ErrorBoundary";
import Error from "./pages/Error";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider>
        <ErrorBoundary fallback={<Error />}>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>
);

