import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import App from "./app/App";
import "shared/config/i18n/i18n";
import { StoreProvider } from "app/providers/StoreProvider";
import AxiosInterceptor from "shared/api/AxiosInterceptor";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StoreProvider>
      <AxiosInterceptor>
        <ErrorBoundary>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ErrorBoundary>
      </AxiosInterceptor>
    </StoreProvider>
  </BrowserRouter>
);
