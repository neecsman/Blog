import { classNames } from "helpers";
import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui";

import { Theme } from "app/providers/ThemeProvider";
import {
  ButtonSize,
  ButtonVariant,
  ColorScheme,
} from "shared/ui/Button/Button";
import SidebarIcon from "shared/assets/icons/hamburger-sidebar.svg";

import SidebarItem from "../SidebarItem/SidebarItem";

import EditIcon from "shared/assets/icons/edit.svg";
import style from "./Sidebar.module.scss";

import { ThemeSwithcer } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { useSelector } from "react-redux";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";

interface SidebarProps {
  className?: string;
  theme?: Theme;
}

const Sidebar: React.FC<SidebarProps> = ({ className, theme }) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItems = useSelector(getSidebarItems);
  const { t } = useTranslation();

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
        {sidebarItems.map(({ Icon, text, path }) => (
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
      {/* <div className={style.new_article}>
        <Button
          size={ButtonSize.XL}
          icon={<EditIcon />}
          colorScheme={ColorScheme.BLUE}
        >
          {t("new article")}
        </Button>
      </div> */}
    </div>
  );
};

export default Sidebar;
