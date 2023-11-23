import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import App from "./App";
import ThemeProvider from "./styles/theme/ThemeProvider";
render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
