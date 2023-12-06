import { classNames } from "helpers";
import style from "./PageLoader.module.scss";
import { Loader } from "shared/ui/";

interface PageLoaderProps {
  className?: string;
}

const PageLoader: React.FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(style.pageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};

export default PageLoader;
