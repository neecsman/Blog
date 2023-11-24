import { useContext } from "react";
import { Theme, ThemeContext } from "./ThemeContext";

interface UsetThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export default function useTheme(): UsetThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return { theme, toggleTheme };
}
