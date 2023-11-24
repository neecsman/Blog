import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "helpers/classNames/classNames";

import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";

import style from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className={classNames(style.themeSwithcer, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? (
        <LightIcon width={30} height={30} />
      ) : (
        <DarkIcon width={30} height={30} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
