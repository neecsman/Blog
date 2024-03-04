import React from "react";
import { classNames } from "helpers";

import { Button } from "shared/ui";
import { ButtonVariant, ColorScheme } from "shared/ui/Button/Button";

import { useDisclosure } from "helpers/hooks";
import { LoginModal } from "features/Auth/AuthByUsername";
import { useTranslation } from "react-i18next";

import style from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { t } = useTranslation("auth");
  return (
    <div className={classNames(style.navbar)}>
      <div className={style.btn_group}>
        <Button
          onClick={onOpen}
          variant={ButtonVariant.SOLID}
          colorScheme={ColorScheme.BLUE}
        >
          {t("Sign in")}
        </Button>
        <LoginModal isOpen={isOpen} onClose={onClose} />
      </div>
    </div>
  );
};

export default Navbar;
