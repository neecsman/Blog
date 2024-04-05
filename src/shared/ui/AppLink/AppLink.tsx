import { classNames } from "helpers";
import style from "./AppLink.module.scss";
import { Link } from "react-router-dom";

interface AppLinkProps {
  className?: string;
  children: React.ReactNode;
  to: string;
}

const AppLink: React.FC<AppLinkProps> = ({ className, to, children }) => {
  return (
    <Link className={classNames(style.appLink, {}, [className])} to={to}>
      {children}
    </Link>
  );
};
export default AppLink;
