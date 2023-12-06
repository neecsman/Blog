import { classNames } from "helpers";
import style from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ className }) => {
  return <span className={classNames(style.loader, {}, [className])}></span>;
};

export default Loader;
