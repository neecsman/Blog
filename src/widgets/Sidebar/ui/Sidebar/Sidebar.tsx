import { classNames } from "helpers";
import style from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwithcer } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Theme } from "app/providers/ThemeProvider";
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
      <button data-testid="sidebar-toggle" onClick={onToggle}>
        toggle
      </button>
      <div className={style.switcher}>
        <ThemeSwithcer />
        <LangSwitcher className={style.lang} />
      </div>
    </div>
  );
};

export default Sidebar;
