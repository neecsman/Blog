import { classNames } from "helpers";
import style from "./Modal.module.scss";
import Button, { ButtonSize, ButtonVariant } from "../Button/Button";
import Close from "shared/assets/icons/close.svg";
import Portal from "../Portal/Portal";
import { useEffect, useState } from "react";

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
  const [isOpening, setIsOpening] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  let timer: ReturnType<typeof setTimeout>;

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      timer = setTimeout(() => {
        setIsOpening(true);
      }, 100);
    } else {
      setIsOpening(false);
      timer = setTimeout(() => {
        setIsMounted(false);
      }, 100);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  const mods: Record<string, boolean> = {
    [style.isOpening]: isOpening,
  };

  return (
    <>
      {isMounted && (
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
              <div
                className={style.content}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={style.header}>
                  <Button
                    variant={ButtonVariant.GHOST}
                    icon={<Close />}
                    size={ButtonSize.L}
                    className={style.closeBtn}
                    onClick={onClose}
                  />
                </div>
                <div className={style.body}>{children}</div>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal;
