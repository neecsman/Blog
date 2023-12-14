import { classNames } from "helpers";
import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import ThemeSwitcher from "widgets/ThemeSwitcher/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(style.navbar)}>
      <div className={style.links}>
        <AppLink
          className={style.mainLink}
          theme={AppLinkTheme.SECONDARY}
          to={"/"}
        >
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          About
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
