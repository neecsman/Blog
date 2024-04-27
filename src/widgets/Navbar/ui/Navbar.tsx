import React from "react";
import { classNames } from "helpers";

import { Button, Text } from "shared/ui";
import {
  ButtonSize,
  ButtonVariant,
  ColorScheme,
} from "shared/ui/Button/Button";

import { useDisclosure } from "helpers/hooks";
import { LoginModal } from "features/Auth/AuthByUsername";
import { useTranslation } from "react-i18next";

import style from "./Navbar.module.scss";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User/model/selectors/getUserAuthData";
import { useAppDispatch } from "app/providers/StoreProvider/config/store";
import { userActions } from "entities/User";
import { ThemeSwithcer } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Search } from "widgets/Search";
import { TextSize, TextVariant } from "shared/ui/Text/Text";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const { t } = useTranslation("auth");

  const onLogout = () => {
    dispatch(userActions.logout());
  };

  let authBtn;

  if (authData) {
    authBtn = (
      <Button
        onClick={onLogout}
        variant={ButtonVariant.SOLID}
        colorScheme={ColorScheme.BLUE}
        size={ButtonSize.L}
      >
        {t("Sign out")}
      </Button>
    );
  } else {
    authBtn = (
      <>
        <Button
          onClick={onOpen}
          variant={ButtonVariant.SOLID}
          colorScheme={ColorScheme.BLUE}
          size={ButtonSize.L}
        >
          {t("Sign in")}
        </Button>
        <LoginModal isOpen={isOpen} onClose={onClose} />
      </>
    );
  }

  return (
    <header className={classNames(style.navbar_wrapper)}>
      <div className={style.navbar}>
        <div className={style.logo}>
          <Text variant={TextVariant.TITLE} size={TextSize["4XL"]}>
            NK
          </Text>
        </div>
        <div className={style.search}>
          <Search />
        </div>
        <div className={style.btn_group}>
          <div className={style.switcher}>
            <ThemeSwithcer />
            <LangSwitcher className={style.lang} />
            {authBtn}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
