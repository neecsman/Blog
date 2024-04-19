import { classNames } from "helpers";
import style from "./ArticleImageBlock.module.scss";
import { memo } from "react";
import { ArticleImageBlock } from "../../../model/types/article";
import { Image, Text } from "shared/ui";
import { TextVariant } from "shared/ui/Text/Text";

interface ArticleImageBlockProps {
  className?: string;
  block: ArticleImageBlock;
}

const ArticleImageBlock: React.FC<ArticleImageBlockProps> = memo(
  ({ className, block }) => {
    return (
      <div className={classNames(style.ArticleImageBlock, {}, [className])}>
        <Text variant={TextVariant.TITLE}>{block.title}</Text>
        <Image src={block.src} alt={block.title} />
      </div>
    );
  }
);
export default ArticleImageBlock;
