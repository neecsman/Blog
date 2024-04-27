import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./Search.module.scss";
import { Input } from "shared/ui";

interface SearchProps {
  className?: string;
}

const Search: React.FC<SearchProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(style.search, {}, [className])}>
      <Input />
    </div>
  );
};
export default Search;
