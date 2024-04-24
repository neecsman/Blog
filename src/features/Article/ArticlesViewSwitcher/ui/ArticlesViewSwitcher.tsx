import { classNames } from "helpers";
import style from "./ArticlesViewSwitcher.module.scss";
import { memo } from "react";
import { ArticleView } from "entities/Article";
import GridIcon from "shared/assets/icons/grid.svg";
import ListIcon from "shared/assets/icons/list.svg";
import { Button } from "shared/ui";
import { ButtonSize, ButtonVariant } from "shared/ui/Button/Button";

interface ArticlesViewSwitcherProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  { view: ArticleView.GRID, icon: <GridIcon /> },
  { view: ArticleView.ROW, icon: <ListIcon /> },
];

const ArticlesViewSwitcher: React.FC<ArticlesViewSwitcherProps> = memo(
  ({ className, view, onViewClick }) => {
    const onClick = (newView: ArticleView) => () => onViewClick?.(newView);

    return (
      <div className={classNames(style.articlesViewSwitcher, {}, [className])}>
        {viewTypes.map((viewType) => (
          <Button
            key={viewType.view}
            variant={
              viewType.view === view ? ButtonVariant.SOLID : ButtonVariant.GHOST
            }
            icon={viewType.icon}
            size={ButtonSize.L}
            onClick={onClick(viewType.view)}
          />
        ))}
      </div>
    );
  }
);
export default ArticlesViewSwitcher;
