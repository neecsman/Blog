import { memo } from "react";
import { classNames } from "helpers";
import { ArticleTextBlock } from "../../model/types/article";
import { Text } from "shared/ui";
import { TextVariant } from "shared/ui/Text/Text";

import style from "./ArticleTextBlock.module.scss";

interface ArticleTextBlockProps {
  className?: string;
  block: ArticleTextBlock;
}

const ArticleTextBlock: React.FC<ArticleTextBlockProps> = memo(
  ({ className, block }) => {
    return (
      <div className={classNames(style.articleTextBlock, {}, [className])}>
        <Text variant={TextVariant.TITLE}>{block.title}</Text>
        <div className={style.paragraphs}>
          {block.paragraphs.map(({ id, text }) => (
            <Text key={id}>{text}</Text>
          ))}
        </div>
      </div>
    );
  }
);
export default ArticleTextBlock;
