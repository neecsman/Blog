import { classNames } from "helpers";
import style from "./Modal.module.scss";
import Button, { ButtonSize, ButtonVariant } from "../Button/Button";
import Close from "shared/assets/icons/close.svg";
import Portal from "../Portal/Portal";
import { useEffect, useRef, useState } from "react";

interface ModalProps {
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  className,
  children,
  isOpen,
  onClose,
}) => {
  const mods: Record<string, boolean> = {
    [style.opened]: isOpen,
  };

  return (
    <Portal>
      <div
        role="button"
        aria-label="modal"
        className={classNames(style.modal, mods, [className])}
      >
        <div
          className={style.overlay}
          role="button"
          aria-label="overlay"
          onClick={onClose}
        >
          <div className={style.content} onClick={(e) => e.stopPropagation()}>
            <Button
              variant={ButtonVariant.GHOST}
              icon={<Close />}
              size={ButtonSize.L}
              className={style.closeBtn}
              onClick={onClose}
            />
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
