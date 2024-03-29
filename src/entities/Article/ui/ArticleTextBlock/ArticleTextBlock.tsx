import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./ArticleTextBlock.module.scss";
import { memo } from "react";
import { ArticleTextBlock } from "../../model/types/article";
import { Text } from "shared/ui";
import { TextVariant } from "shared/ui/Text/Text";
interface ArticleTextBlockProps {
  className?: string;
  block: ArticleTextBlock;
}

const ArticleTextBlock: React.FC<ArticleTextBlockProps> = memo(
  ({ className, block }) => {
    const { t } = useTranslation();
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
