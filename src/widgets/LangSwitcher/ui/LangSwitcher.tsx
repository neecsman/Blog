import { useTranslation } from "react-i18next";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { classNames } from "helpers";

import style from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: React.FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames(style.langSwithcer, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t("language")}
    </Button>
  );
};

export default LangSwitcher;
