import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./ArticleCodeBlock.module.scss";
import { memo } from "react";
import { ArticleCodetBlockType } from "../../../model/types/article";
import { Code } from "shared/ui";

interface ArticleCodeBlockProps {
  className?: string;
  block: ArticleCodetBlockType;
}

const ArticleCodeBlock: React.FC<ArticleCodeBlockProps> = memo(
  ({ className, block }) => {
    const { t } = useTranslation();
    return (
      <div className={classNames(style.articleCodeBlock, {}, [className])}>
        <Code value={block.code} />
      </div>
    );
  }
);
export default ArticleCodeBlock;
