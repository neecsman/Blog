import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./Articles.module.scss";

interface ArticlesProps {
  className?: string;
}

const Articles: React.FC<ArticlesProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(style.articles, {}, [className])}>ARTICLES</div>
  );
};
export default Articles;
