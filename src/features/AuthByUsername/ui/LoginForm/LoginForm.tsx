import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./LoginForm.module.scss";
import { Button } from "shared/ui";
import Input from "shared/ui/Input/Input";

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation("auth");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={classNames(style.LoginForm, {}, [className])}>
      <Input type="text" />
      <Input type="text" />
      <Button>{t("Sign in")}</Button>
    </div>
  );
};
export default LoginForm;
