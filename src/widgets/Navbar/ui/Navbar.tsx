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

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div className={classNames(style.navbar)}>
      <div className={style.btn_group}>
        <Button
          onClick={onOpen}
          variant={ButtonVariant.SOLID}
          colorScheme={ColorScheme.BLUE}
        >
          Войти
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          repudiandae iure vitae maxime blanditiis dicta, velit maiores sit
          cupiditate nisi quisquam eveniet! Voluptate necessitatibus impedit
          esse. Itaque saepe cum illum?
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
