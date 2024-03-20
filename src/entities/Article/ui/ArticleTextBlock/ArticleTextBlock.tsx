import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./ArticleTextBlock.module.scss";
import { memo } from "react";

interface ArticleTextBlockProps {
  className?: string;
}

const ArticleTextBlock: React.FC<ArticleTextBlockProps> = memo(
  ({ className }) => {
    const { t } = useTranslation();
    return (
      <div className={classNames(style.ArticleTextBlock, {}, [className])}>
        TEXT
      </div>
    );
  }
);
export default ArticleTextBlock;
