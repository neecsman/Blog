import React, { memo, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./LoginForm.module.scss";
import { Button } from "shared/ui";
import Input from "shared/ui/Input/Input";
import { useDispatch } from "react-redux";

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = memo(({ className }) => {
  const { t } = useTranslation("auth");
  const dispatch = useDispatch();

  return (
    <div className={classNames(style.LoginForm, {}, [className])}>
      <Input autoFocus type="text" />
      <Input type="text" />
      <Button>{t("Sign in")}</Button>
    </div>
  );
});
export default LoginForm;
