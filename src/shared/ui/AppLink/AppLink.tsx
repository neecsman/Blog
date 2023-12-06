import { classNames } from "helpers";
import style from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
  theme?: AppLinkTheme;
}

const AppLink: React.FC<AppLinkProps> = (props) => {
  const {
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    to,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(style.appLink, {}, [className, style[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
