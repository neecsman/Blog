import { useContext } from "react";
import { Theme, ThemeContext } from "./ThemeContext";

interface UsetThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export default function useTheme(): UsetThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const body = document.body;

    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setTheme?.(newTheme);
    body.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);
  };

  return { theme: theme || Theme.LIGHT, toggleTheme };
}
