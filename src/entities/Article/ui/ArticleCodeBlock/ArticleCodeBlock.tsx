import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./ArticleCodeBlock.module.scss";

interface ArticleCodeBlockProps {
  className?: string;
}

const ArticleCodeBlock: React.FC<ArticleCodeBlockProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(style.ArticleCodeBlock, {}, [className])}></div>
  );
};
export default ArticleCodeBlock;
