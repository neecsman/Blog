import { classNames } from "helpers";
import { NavLink, LinkProps } from "react-router-dom";

import style from "./SidebarItem.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";

export enum SidebarItemTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface NavLinkProps extends LinkProps {
  className?: string;
  children: string;
  theme?: SidebarItemTheme;
  icon?: React.ReactNode;
  collapsed?: boolean;
}

const SidebarItem = memo((props: NavLinkProps) => {
  const {
    className,
    children,
    theme = SidebarItemTheme.PRIMARY,
    icon,
    collapsed,
    to,
    ...otherProps
  } = props;

  const { t } = useTranslation();

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(
          style.navLink,
          { [style.collapsed]: collapsed, [style.active]: isActive },
          [className, style[theme]]
        )
      }
      {...otherProps}
    >
      <div className={style.icon}>{icon}</div>
      {!collapsed && t(children)}
    </NavLink>
  );
});

export default SidebarItem;
