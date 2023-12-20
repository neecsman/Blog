import { classNames } from "helpers";
import React from "react";

import style from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return <div className={classNames(style.navbar)}></div>;
};

export default Navbar;
