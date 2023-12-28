import { classNames } from "helpers";
import React from "react";

import style from "./Navbar.module.scss";
import { Button } from "shared/ui";
import {
  ButtonSize,
  ButtonVariant,
  ColorScheme,
} from "shared/ui/Button/Button";
import Modal from "shared/ui/Modal/Modal";
import { useDisclosure } from "helpers/hooks";
import { LoginModal } from "features/AuthByUsername";
import { useTranslation } from "react-i18next";

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
