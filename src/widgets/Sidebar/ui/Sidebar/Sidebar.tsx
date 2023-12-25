import { classNames } from "helpers";
import { useState } from "react";
import { ThemeSwithcer } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Theme } from "app/providers/ThemeProvider";
import { Button } from "shared/ui";
import { ButtonSize, ButtonVariant } from "shared/ui/Button/Button";
import SidebarIcon from "shared/assets/icons/hamburger-sidebar.svg";
import { useTranslation } from "react-i18next";
import NavLink from "shared/ui/NavLink/NavLink";
import { RouterPath } from "shared/config/routeConfig/routerConfig";

import HomeIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/info.svg";

import style from "./Sidebar.module.scss";

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
        size={ButtonSize.L}
        icon={<SidebarIcon />}
      />
      <div className={style.menu}>
        <NavLink icon={<HomeIcon />} to={RouterPath.main} collapsed={collapsed}>
          {t("route.main")}
        </NavLink>
        <NavLink
          icon={<AboutIcon />}
          to={RouterPath.about}
          collapsed={collapsed}
        >
          {t("route.about")}
        </NavLink>
      </div>
      <div className={style.switcher}>
        <ThemeSwithcer />
        <LangSwitcher className={style.lang} />
      </div>
    </div>
  );
};

export default Sidebar;
