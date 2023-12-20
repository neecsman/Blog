import { classNames } from "helpers";
import style from "./NavLink.module.scss";
import { NavLink as Link, LinkProps } from "react-router-dom";

export enum NavLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface NavLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
  theme?: NavLinkTheme;
  icon?: React.ReactNode;
  collapsed?: boolean;
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  const {
    className,
    children,
    theme = NavLinkTheme.PRIMARY,
    icon,
    collapsed,
    to,
    ...otherProps
  } = props;

  return (
    <Link
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
      {!collapsed && children}
    </Link>
  );
};

export default NavLink;
