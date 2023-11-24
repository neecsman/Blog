import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import App from "./app/App";
import { ThemeProvider } from "app/providers/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Suspense>
  </BrowserRouter>
);
