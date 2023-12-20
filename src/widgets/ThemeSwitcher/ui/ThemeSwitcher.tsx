import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "helpers";

import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";

import style from "./ThemeSwitcher.module.scss";
import Button, { ButtonVariant } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      variant={ButtonVariant.CLEAR}
      className={classNames(style.themeSwithcer, {}, [className])}
      onClick={toggleTheme}
      square
    >
      {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};

export default ThemeSwitcher;
