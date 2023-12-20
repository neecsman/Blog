import { classNames } from "helpers";
import style from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwithcer } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import { Button } from "shared/ui";
import { ButtonVariant, ColorScheme } from "shared/ui/Button/Button";
import SidebarIcon from "shared/assets/icons/hamburger-sidebar.svg";
import { Link } from "react-router-dom";
import { RouterPath } from "shared/config/routeConfig/routerConfig";
import { useTranslation } from "react-i18next";
import Home from "shared/assets/icons/home.svg";
import Info from "shared/assets/icons/info.svg";
interface SidebarProps {
  className?: string;
  theme?: Theme;
}

const Sidebar: React.FC<SidebarProps> = ({ className, theme }) => {
  const { t } = useTranslation();
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
        icon={<SidebarIcon />}
      />
      <div className={style.menu}>
        <Link to={RouterPath.main}>
          <Button icon={<Home />} variant={ButtonVariant.GHOST}>
            {!collapsed && t("route.main")}
          </Button>
        </Link>
        <Link to={RouterPath.about}>
          <Button icon={<Info />} variant={ButtonVariant.GHOST}>
            {!collapsed && t("route.about")}
          </Button>
        </Link>
      </div>
      <div className={style.switcher}>
        <ThemeSwithcer />
        <LangSwitcher className={style.lang} />
      </div>
    </div>
  );
};

export default Sidebar;
