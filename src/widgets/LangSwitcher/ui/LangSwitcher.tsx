import { useTranslation } from "react-i18next";
import Button, { ButtonSize, ButtonVariant } from "shared/ui/Button/Button";
import { classNames } from "helpers";

import style from "./LangSwitcher.module.scss";
import { memo } from "react";

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: React.FC<LangSwitcherProps> = memo(({ className }) => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames(style.langSwithcer, {}, [className])}
      variant={ButtonVariant.SOLID}
      size={ButtonSize.L}
      onClick={toggle}
    >
      {t("language")}
    </Button>
  );
});

export default LangSwitcher;
