import { classNames } from "helpers";
import style from "./Modal.module.scss";
import Button, { ButtonSize, ButtonVariant } from "../Button/Button";
import Close from "shared/assets/icons/close.svg";
import Portal from "../Portal/Portal";

interface ModalProps {
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  closeOnEsc?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

const Modal: React.FC<ModalProps> = ({
  className,
  children,
  isOpen,
  onClose,
  closeOnEsc,
}) => {
  const mods: Record<string, boolean> = {
    [style.opened]: isOpen,
    [style.closed]: !isOpen,
  };

  return (
    <Portal>
      <div
        role="button"
        aria-label="modal"
        onKeyDown={closeOnEsc}
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
              size={ButtonSize.M}
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
