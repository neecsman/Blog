import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./ArticleImageBlock.module.scss";

interface ArticleImageBlockProps {
  className?: string;
}

const ArticleImageBlock: React.FC<ArticleImageBlockProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(style.ArticleImageBlock, {}, [className])}></div>
  );
};
export default ArticleImageBlock;
