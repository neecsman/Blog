import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./ArticleImageBlock.module.scss";
import { memo } from "react";

interface ArticleImageBlockProps {
  className?: string;
}

const ArticleImageBlock: React.FC<ArticleImageBlockProps> = memo(
  ({ className }) => {
    const { t } = useTranslation();
    return (
      <div className={classNames(style.ArticleImageBlock, {}, [className])}>
        IMAGE
      </div>
    );
  }
);
export default ArticleImageBlock;
