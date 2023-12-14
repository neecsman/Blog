import { classNames } from "helpers";
import style from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwithcer } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Theme } from "app/providers/ThemeProvider";
import { Button } from "shared/ui";
import { ButtonVariant } from "shared/ui/Button/Button";
import SidebarIcon from "shared/assets/icons/hamburger-sidebar.svg";
interface SidebarProps {
  className?: string;
  theme?: Theme;
}

const Sidebar: React.FC<SidebarProps> = ({ className, theme }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(style.sidebar, { [style.collapsed]: collapsed }, [
        className,
        theme,
      ])}
    >
      <Button
        variant={ButtonVariant.OUTLINE}
        className={style.collapseBtn}
        data-testid="sidebar-toggle"
        onClick={onToggle}
        square
      >
        <SidebarIcon />
      </Button>
      <div className={style.switcher}>
        <ThemeSwithcer />
        <LangSwitcher className={style.lang} />
      </div>
    </div>
  );
};

export default Sidebar;
