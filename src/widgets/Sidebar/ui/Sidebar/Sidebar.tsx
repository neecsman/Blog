import { classNames } from "helpers";
import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui";
import { ThemeSwithcer } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Theme } from "app/providers/ThemeProvider";
import { ButtonSize, ButtonVariant } from "shared/ui/Button/Button";
import SidebarIcon from "shared/assets/icons/hamburger-sidebar.svg";

import SidebarItem from "../SidebarItem/SidebarItem";

import style from "./Sidebar.module.scss";
import { SidebarItemsList } from "widgets/Sidebar/model/types/SidebarItemType";

interface SidebarProps {
  className?: string;
  theme?: Theme;
}

const Sidebar: React.FC<SidebarProps> = ({ className, theme }) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);
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
        {SidebarItemsList.map(({ Icon, text, path }) => (
          <SidebarItem
            key={path}
            icon={<Icon />}
            to={path}
            collapsed={collapsed}
          >
            {text}
          </SidebarItem>
        ))}
      </div>
      <div className={style.switcher}>
        <ThemeSwithcer />
        <LangSwitcher className={style.lang} />
      </div>
    </div>
  );
};

export default Sidebar;
