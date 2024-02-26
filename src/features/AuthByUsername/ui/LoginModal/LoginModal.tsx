import { classNames } from "helpers";

import Modal from "shared/ui/Modal/Modal";

import style from "./LoginModal.module.scss";
import { LoginFormAsync } from "../LoginForm/LoginFormAsync";
import { Suspense } from "react";
import { Loader } from "shared/ui";

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
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
