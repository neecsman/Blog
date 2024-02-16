import { classNames } from "helpers";

import Modal from "shared/ui/Modal/Modal";
import LoginForm from "../LoginForm/LoginForm";

import style from "./LoginModal.module.scss";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  className,
  isOpen,
  onClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames(style.LoginModal, {}, [className])}
    >
      <LoginForm />
    </Modal>
  );
};
