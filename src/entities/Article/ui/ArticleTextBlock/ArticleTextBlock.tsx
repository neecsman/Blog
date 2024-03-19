import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./ArticleTextBlock.module.scss";

interface ArticleTextBlockProps {
  className?: string;
}

const ArticleTextBlock: React.FC<ArticleTextBlockProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(style.ArticleTextBlock, {}, [className])}></div>
  );
};
export default ArticleTextBlock;
